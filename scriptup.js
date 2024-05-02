const signUpForm = document.getElementById('signUpForm');
signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Sign-up form submitted with name:', name, 'email:', email, 'and password:', password);
    window.location.href = 'signin.html';
});