// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Subscription alert
    const subscribeButton = document.querySelector('footer button');
    subscribeButton.addEventListener('click', function() {
        const emailInput = document.querySelector('footer input[type="email"]');
        alert(`Subscribed with email: ${emailInput.value}`);
    });
});

// Toggle password visibility
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? 'Show' : 'Hide';
});

// Form submission and validation
function handleSubmit(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const successMessage = document.getElementById('successMessage');

    if (username === '' || password === '') {
        alert('Please fill in both the username and password.');
        return false;
    }
    
    // Show success message and reset form
    successMessage.style.display = 'block';
    successMessage.textContent = 'Login Successful!';
    window.location.href="choose-genre.html";

    // Clear the form fields
    document.getElementById('loginForm').reset();
    return true;
}
