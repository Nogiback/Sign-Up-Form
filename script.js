const firstName = document.querySelector('#first-name');
const firstNameError = document.querySelector('#first-name-error');
const lastName = document.querySelector('#last-name');
const lastNameError = document.querySelector('#last-name-error');
const email = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
const phoneNumber = document.querySelector('#phone-number');
const phoneNumberError = document.querySelector('#tel-error');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#password-error');
const confirmPassword = document.querySelector('#confirm-password');
const confirmPasswordError = document.querySelector('#confirm-password-error');

firstName.addEventListener('input', function(event) {
  if(firstName.value === '') {
    firstNameError.textContent = '*Please enter your first name';
  } else {
    firstNameError.textContent = '';
  }
});

lastName.addEventListener('input', function(event) {
  if(lastName.value === '') {
    lastNameError.textContent = '*Please enter your last name';
  } else {
    lastNameError.textContent = '';
  }
});

email.addEventListener('input', function(event) {
  if(email.validity.typeMismatch) {
    emailError.textContent = '*Please enter valid email address';
  } else {
    emailError.textContent = '';
  }
});

phoneNumber.addEventListener('input', function(event) {
  if(phoneNumber.validity.patternMismatch) {
    phoneNumberError.textContent = '*Please enter a 10 digit phone number';
  } else {
    phoneNumberError.textContent = '';
  }
});

password.addEventListener('input', function(event) {
  let input = password.value;
  const upperRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;

  if (input.length > 7) {
    if (!upperRegex.test(input) || !numberRegex.test(input)) {
      passwordError.textContent = '*Password must contain at least one uppercase letter and one digit';
    } else {
      passwordError.textContent = '';
    }
  } else {
    passwordError.textContent = '*Password must be at least 8 characters long';
  }

});

confirmPassword.addEventListener('input', function(event) {
  if(confirmPassword.value === '') {
    confirmPasswordError.textContent = '*Please confirm your password';
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = '*Passwords do not match!';
  } else {
    confirmPasswordError.textContent = '';
  }
});