const confirmPass = document.querySelector('#confirm-pass');
const pass = document.querySelector('#pass');

confirmPass.addEventListener('input', () => {
    confirmPass.setAttribute('pattern', pass.value);
});