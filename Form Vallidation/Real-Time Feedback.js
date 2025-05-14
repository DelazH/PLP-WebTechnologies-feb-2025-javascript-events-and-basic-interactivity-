emailInput.addEventListener('input', () => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  showValidation(emailInput, isValid);
});

passwordInput.addEventListener('input', () => {
  const isValid = passwordInput.value.length >= 8;
  showValidation(passwordInput, isValid);
});
