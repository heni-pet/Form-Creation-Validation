document.addEventListener('DOMContentLoaded', function () {
  // Form and Feedback Division Selection
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('feedbackDiv');

  // Form Submission Event Listener
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Input Retrieval and Trimming
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation Logic
    let isValid = true;
    const messages = [];

    // Username Validation
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Email Validation
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push('Email must contain "@" and "."');
    }

    // Password Validation
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // Displaying Feedback
    feedbackDiv.style.display = 'block';
    if (isValid) {
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745'; // Green
    } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545'; // Red
      
    }
    console.log("Validation Result:", isValid);
  });
});
feedbackDiv.style.display = 'block';
feedbackDiv.style.border = '1px solid black';