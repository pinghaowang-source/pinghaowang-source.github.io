import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  MAX_BATCH_SIZE,
  allowedOrigins,
  isOriginAllowed,
  isValidCfIp,
  maskIp,
  parseReportingRange,
  sanitizePagePath,
  sanitizeTargetPath,
  validateEvent,
  validateEventEnvelope,
} from '../.test-build/lib.js';

const baseEvent = {
  eventId: 'event_1234567890',
  eventType: 'page_view',
  pagePath: '/product.html?token=secret#details',
  pageTitle: 'Product',
  sessionId: 'session_123456',
  language: 'zh-CN',
  device: 'desktop',
};

describe('path privacy', () => {
  it('strips query strings and fragments from page paths', () => {
    assert.equal(sanitizePagePath('/product.html?token=secret#details'), '/product.html');
  });

  it('strips external query strings and rejects non-http targets', () => {
    assert.equal(sanitizeTargetPath('https://example.com/path?email=a@example.com'), 'example.com/path');
    assert.equal(sanitizeTargetPath('mailto:person@example.com'), null);
  });
});

describe('strict origin matching', () => {
  const origins = allowedOrigins('https://www.scovion.com,https://scovion.com');

  it('accepts exact configured origins', () => {
    assert.equal(isOriginAllowed('https://www.scovion.com', origins), true);
  });

  it('rejects suffix and path tricks', () => {
    assert.equal(isOriginAllowed('https://www.scovion.com.evil.test', origins), false);
    assert.equal(isOriginAllowed('https://www.scovion.com/path', origins), false);
    assert.equal(isOriginAllowed(null, origins), false);
  });
});

describe('event validation', () => {
  it('normalizes a canonical event without retaining unknown form fields', () => {
    const event = validateEvent({ ...baseEvent, formValue: 'private message' });
    assert.ok(event);
    assert.equal(event.eventId, baseEvent.eventId);
    assert.equal(event.eventType, 'page_view');
    assert.equal(event.pagePath, '/product.html');
    assert.equal(event.language, 'zh-cn');
    assert.equal(event.device, 'desktop');
    assert.equal(Object.hasOwn(event, 'formValue'), false);
  });

  it('accepts the compact legacy aliases', () => {
    const event = validateEvent({
      id: 'event_legacy_1234',
      type: 'click',
      page: '/about.html',
      title: 'About',
      target: 'advisor-profile',
      sessionId: 'session_legacy_1',
    });
    assert.ok(event);
    assert.equal(event.eventType, 'click');
    assert.equal(event.pagePath, '/about.html');
    assert.equal(event.targetKey, 'advisor-profile');
  });

  it('requires a safe conversion target', () => {
    assert.equal(validateEvent({ ...baseEvent, eventType: 'conversion' }), null);
    assert.ok(validateEvent({ ...baseEvent, eventType: 'conversion', targetKey: 'contact-form-success' }));
  });

  it('limits event batches', () => {
    const accepted = validateEventEnvelope(Array.from({ length: MAX_BATCH_SIZE }, (_, index) => ({
      ...baseEvent,
      eventId: `event_123456_${index}`,
    })));
    assert.equal(accepted.length, MAX_BATCH_SIZE);
    const rejected = validateEventEnvelope(Array.from({ length: MAX_BATCH_SIZE + 1 }, (_, index) => ({
      ...baseEvent,
      eventId: `event_123456_${index}`,
    })));
    assert.equal(rejected, null);
  });
});

describe('IP handling', () => {
  it('validates edge IP formats', () => {
    assert.equal(isValidCfIp('203.0.113.8'), true);
    assert.equal(isValidCfIp('2001:db8:85a3::8a2e:370:7334'), true);
    assert.equal(isValidCfIp('999.0.0.1'), false);
  });

  it('masks IPs by default', () => {
    assert.equal(maskIp('203.0.113.8'), '203.0.113.xxx');
    assert.equal(maskIp('2001:db8:85a3:0000:0000:8a2e:0370:7334'), '2001:db8:85a3:0000::/64');
  });
});

describe('reporting ranges', () => {
  it('defaults unknown ranges to 30 days', () => {
    assert.equal(parseReportingRange('invalid').key, '30d');
    assert.equal(parseReportingRange('13mo').key, '13mo');
  });
});
