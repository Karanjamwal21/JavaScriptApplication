const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

loginForm.addEventListener('submit', (e) => {
   
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'karan' && password === 'pass123') {

        alert("login Successfully")
        location.href = 'LoginHome.html';

    } 
    else {
        loginMessage.innerHTML = 'Invalid username or password';
    }
});


