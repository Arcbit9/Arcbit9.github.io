document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loadingText = document.getElementById('loading');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission for demo
        loadingText.classList.remove('hidden'); // Show loading text

        // Simulate a loading delay (e.g., API call)
        setTimeout(() => {
            loadingText.classList.add('hidden'); // Hide loading text
            alert('Logged in successfully!'); // Placeholder for actual login logic
        }, 2000); // 2 seconds delay for demo
    });
});
