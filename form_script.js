document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('survey-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const ageInput = document.getElementById('number');
  const submitButton = document.getElementById('submit');
  const formStatus = document.getElementById('form-status');

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    clearErrors();

    if (!nameInput.value.trim()) {
      showError('name', 'Full name is required.');
      isValid = false;
    }

    if (!emailInput.value.trim()) {
      showError('email', 'Email address is required.');
      isValid = false;
    } else if (!validateEmail(emailInput.value)) {
      showError('email', 'Please enter a valid email.');
      isValid = false;
    }

    if (!ageInput.value.trim()) {
      showError('age', 'Age is required.');
      isValid = false;
    } else if (ageInput.value < 10 || ageInput.value > 99) {
      showError('age', 'Please enter a valid age between 10 and 99.');
      isValid = false;
    }

    if (isValid) {
      formStatus.textContent = "Thank you for your feedback!";
      formStatus.style.color = "#28a745";
      form.reset();
      setTimeout(() => formStatus.textContent = '', 5000);
    } else {
      formStatus.textContent = "Please correct the errors and try again.";
      formStatus.style.color = "#e74c3c";
    }
  });

  function showError(inputId, message) {
    const errorSpan = document.getElementById(`${inputId}-error`);
    errorSpan.textContent = message;
  }

  function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.textContent = '');
  }

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
});
