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
    firstName.style.borderColor = 'red';
  } else {
    firstNameError.textContent = '';
    firstName.style.borderColor = 'rgb(10, 25, 66)';
  }
});

lastName.addEventListener('input', function(event) {
  if(lastName.value === '') {
    lastNameError.textContent = '*Please enter your last name';
    lastName.style.borderColor = 'red';
  } else {
    lastNameError.textContent = '';
    lastName.style.borderColor = 'rgb(10, 25, 66)';
  }
});

email.addEventListener('input', function(event) {
  if(email.validity.typeMismatch) {
    emailError.textContent = '*Please enter valid email address';
    email.style.borderColor = 'red';
  } else {
    emailError.textContent = '';
    email.style.borderColor = 'rgb(10, 25, 66)';
  }
});

phoneNumber.addEventListener('input', function(event) {
  if(phoneNumber.validity.patternMismatch) {
    phoneNumberError.textContent = '*Please enter a 10 digit phone number';
    phoneNumber.style.borderColor = 'red';
  } else {
    phoneNumberError.textContent = '';
    phoneNumber.style.borderColor = 'rgb(10, 25, 66)';
  }
});

password.addEventListener('input', function(event) {
  let input = password.value;
  const upperRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;

  if (input.length > 7) {
    if (!upperRegex.test(input) || !numberRegex.test(input)) {
      passwordError.textContent = '*Password must contain at least one uppercase letter and one digit';
      password.style.borderColor = 'red';
    } else {
      passwordError.textContent = '';
      password.style.borderColor = 'rgb(10, 25, 66)';
    }
  } else {
    passwordError.textContent = '*Password must be at least 8 characters long';
    password.style.borderColor = 'red';
  }

});

confirmPassword.addEventListener('input', function(event) {
  if(confirmPassword.value === '') {
    confirmPasswordError.textContent = '*Please confirm your password';
    confirmPassword.style.borderColor = 'red';
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = '*Passwords do not match!';
    confirmPassword.style.borderColor = 'red';
  } else {
    confirmPasswordError.textContent = '';
    confirmPassword.style.borderColor = 'rgb(10, 25, 66)';
  }
});