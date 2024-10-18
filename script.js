document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication check (replace with your own logic)
    const validUsername = 'user';
    const validPassword = 'pass';

    if (username === validUsername && password === validPassword) {
        document.getElementById('message').textContent = 'Login successful!';
        // Redirect to another page or perform another action
        // window.location.href = 'dashboard.html';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
});
