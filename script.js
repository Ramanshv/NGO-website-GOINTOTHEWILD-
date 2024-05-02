const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const signUpContainer = document.getElementById('signUpContainer');
const signUpLink = document.getElementById('signUpLink');
signUpLink.addEventListener('click', () => {
    signUpContainer.style.display = signUpContainer.style.display === 'none' ? 'block' : 'none';
});
signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Sign-in form submitted with email:', email, 'and password:', password);
});

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    console.log('Sign-up form submitted with name:', name, 'email:', email, 'and password:', password);
});
signUpLink.addEventListener('click', () => {
    signUpContainer.style.display = signUpContainer.style.display === 'none' ? 'block' : 'none';
});
signInForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Sign-in form submitted with email:', email, 'and password:', password);
});
signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    console.log('Sign-up form submitted with name:', name, 'email:', email, 'and password:', password);
});