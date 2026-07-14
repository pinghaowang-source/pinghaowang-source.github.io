(() => {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  const submitButton = form.querySelector('.form-submit');
  const successStatus = document.querySelector('#form-success');
  const errorStatus = document.querySelector('#form-error');
  const phoneField = form.querySelector('.phone-field');
  const phoneCodeSelect = form.querySelector('select[name="phone_code"]');
  const phoneNumberInput = form.querySelector('input[name="phone"]');
  const phoneError = form.querySelector('.phone-error');
  const recipientParts = ['pinghao.wang', 'scovion.com'];
  const endpoint = `https://formsubmit.co/ajax/${recipientParts.join('@')}`;
  const openedAt = Date.now();

  function setLoading(loading) {
    submitButton.disabled = loading;
    submitButton.classList.toggle('is-loading', loading);
    submitButton.setAttribute('aria-busy', String(loading));
  }

  function showStatus(target) {
    successStatus.classList.toggle('is-visible', target === successStatus);
    errorStatus.classList.toggle('is-visible', target === errorStatus);
    if (target) target.focus({ preventScroll: false });
  }

  function clean(value) {
    return String(value || '').trim();
  }

  function validatePhonePair() {
    const hasCode = Boolean(clean(phoneCodeSelect?.value));
    const hasNumber = Boolean(clean(phoneNumberInput?.value));
    const invalid = hasCode !== hasNumber;
    phoneField?.classList.toggle('phone-invalid', invalid);
    if (phoneError) phoneError.hidden = !invalid;
    return !invalid;
  }

  phoneNumberInput?.addEventListener('input', () => {
    phoneNumberInput.value = phoneNumberInput.value.replace(/\D/g, '').slice(0, 15);
    validatePhonePair();
  });
  phoneCodeSelect?.addEventListener('change', validatePhonePair);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    form.classList.add('was-validated');
    showStatus(null);

    if (!validatePhonePair()) {
      (clean(phoneNumberInput?.value) ? phoneCodeSelect : phoneNumberInput)?.focus();
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    if (clean(data.get('_honey'))) {
      form.reset();
      showStatus(successStatus);
      return;
    }

    if (Date.now() - openedAt < 1200) return;

    const source = /^https?:$/.test(window.location.protocol) ? window.location.href : 'SCOVION website contact form';
    const payload = {
      _subject: 'New SCOVION website enquiry',
      _template: 'table',
      _replyto: clean(data.get('email')),
      Name: clean(data.get('name')),
      Company: clean(data.get('company')),
      Email: clean(data.get('email')),
      Phone: clean(data.get('phone')) ? `${clean(data.get('phone_code'))} ${clean(data.get('phone'))}` : 'Not provided',
      'Country / Region': clean(data.get('country')),
      'Area of Interest': clean(data.get('interest')),
      'Project Stage': clean(data.get('stage')),
      Timeline: clean(data.get('timeline')),
      'Project Details': clean(data.get('details')),
      'Privacy Consent': data.get('consent') ? 'Yes' : 'No',
      'Website Language': document.documentElement.lang || 'en',
      Source: source
    };

    setLoading(true);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error('Submission failed');
      form.reset();
      form.classList.remove('was-validated');
      validatePhonePair();
      showStatus(successStatus);
    } catch (error) {
      showStatus(errorStatus);
    } finally {
      setLoading(false);
    }
  });
})();
