const firstName = document.querySelector('#first-name');
const firstNameError = document.querySelector('#first-name-error');
const lastName = document.querySelector('#last-name');
const lastNameError = document.querySelector('#last-name-error');
const email = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
const phoneNumber = document.querySelector('#phone-number');
const phoneNumberError = document.querySelector('#tel-error');

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