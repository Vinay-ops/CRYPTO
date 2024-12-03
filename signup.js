document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (username && email && password) {

        alert('Sign up successful!');
    } else {
        alert('Please fill in all fields.');
    }
});
