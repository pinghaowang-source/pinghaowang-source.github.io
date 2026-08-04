const encoder = new TextEncoder();

function exactBuffer(bytes: Uint8Array): ArrayBuffer {
  return bytes.slice().buffer as ArrayBuffer;
}

function base64Bytes(value: string): Uint8Array {
  const compact = value.replace(/\s+/g, "");
  const binary = atob(compact);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

function hex(bytes: Uint8Array): string {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function createVisitorId(
  ip: string,
  userAgent: string | null,
  secret: string | undefined,
): Promise<string> {
  if (!secret || encoder.encode(secret).length < 32) {
    throw new Error("IP_HASH_SECRET must contain at least 32 bytes");
  }
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const normalizedAgent = (userAgent ?? "").slice(0, 512);
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(`${ip}\n${normalizedAgent}`));
  return hex(new Uint8Array(signature));
}

async function importEncryptionKey(encodedKey: string | undefined): Promise<CryptoKey> {
  if (!encodedKey) throw new Error("IP_ENCRYPTION_KEY is not configured");
  let bytes: Uint8Array;
  try {
    bytes = base64Bytes(encodedKey);
  } catch {
    throw new Error("IP_ENCRYPTION_KEY must be valid base64");
  }
  if (bytes.length !== 32) throw new Error("IP_ENCRYPTION_KEY must decode to exactly 32 bytes");
  return crypto.subtle.importKey("raw", exactBuffer(bytes), { name: "AES-GCM" }, false, [
    "encrypt",
    "decrypt",
  ]);
}

export interface EncryptedIp {
  ciphertext: ArrayBuffer;
  iv: ArrayBuffer;
}

export async function encryptIp(
  ip: string,
  visitorId: string,
  encodedKey: string | undefined,
): Promise<EncryptedIp> {
  const key = await importEncryptionKey(encodedKey);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = await crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: exactBuffer(iv),
      additionalData: encoder.encode(visitorId),
    },
    key,
    encoder.encode(ip),
  );
  return { ciphertext, iv: exactBuffer(iv) };
}

function toBytes(value: unknown): Uint8Array {
  if (value instanceof ArrayBuffer) return new Uint8Array(value);
  if (ArrayBuffer.isView(value)) {
    return new Uint8Array(value.buffer, value.byteOffset, value.byteLength).slice();
  }
  if (Array.isArray(value) && value.every((item) => Number.isInteger(item) && item >= 0 && item <= 255)) {
    return Uint8Array.from(value);
  }
  throw new Error("Encrypted database value is not a supported BLOB");
}

export async function decryptIp(
  ciphertextValue: unknown,
  ivValue: unknown,
  visitorId: string,
  encodedKey: string | undefined,
): Promise<string> {
  const key = await importEncryptionKey(encodedKey);
  const ciphertext = toBytes(ciphertextValue);
  const iv = toBytes(ivValue);
  if (iv.length !== 12) throw new Error("Encrypted IP has an invalid IV");
  const plaintext = await crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: exactBuffer(iv),
      additionalData: encoder.encode(visitorId),
    },
    key,
    exactBuffer(ciphertext),
  );
  return new TextDecoder().decode(plaintext);
}
