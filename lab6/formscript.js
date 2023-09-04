// Validation functions
function validateFullName(name) {
    return /^[A-Za-z ]{3,}$/.test(name);
  }
  
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function validatePassword(password) {
    return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
  }
  
  function validateDOB(dob) {
    const currentDate = new Date();
    const inputDate = new Date(dob);
    const age = currentDate.getFullYear() - inputDate.getFullYear();
    return age >= 18;
  }
  
  // Real-time validation and event handling
  const form = document.getElementById('registration-form');
  const fullNameInput = document.getElementById('full-name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const dobInput = document.getElementById('dob');
  const submitButton = document.getElementById('submit-btn');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const fullName = fullNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const dob = dobInput.value;
  
    const isFullNameValid = validateFullName(fullName);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const doPasswordsMatch = password === confirmPassword;
    const isDOBValid = validateDOB(dob);
  
    // Update status and display error messages
    updateStatus(fullNameInput, isFullNameValid);
    updateStatus(emailInput, isEmailValid);
    updateStatus(passwordInput, isPasswordValid);
    updateStatus(confirmPasswordInput, doPasswordsMatch);
    updateStatus(dobInput, isDOBValid);
  
    // Enable or disable submit button
    submitButton.disabled = !(isFullNameValid && isEmailValid && isPasswordValid && doPasswordsMatch && isDOBValid);
  });
  
  function updateStatus(inputElement, isValid) {
    const statusElement = inputElement.nextElementSibling;
    statusElement.textContent = isValid ? '✓' : '✕';
    statusElement.className = isValid ? 'valid' : 'invalid';
}

// Password match validation
confirmPasswordInput.addEventListener('input', function() {
  const doPasswordsMatch = passwordInput.value === confirmPasswordInput.value;
  updateStatus(confirmPasswordInput, doPasswordsMatch);
});

// Age calculation and enabling/disabling submit button
dobInput.addEventListener('input', function() {
  const dob = dobInput.value;
  const isDOBValid = validateDOB(dob);
  updateStatus(dobInput, isDOBValid);
  submitButton.disabled = !isDOBValid;
});