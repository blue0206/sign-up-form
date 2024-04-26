//Invalid input element styling
const inputList = document.querySelectorAll('input');
for (let i=0; i<inputList.length; i++)
{
    inputList[i].addEventListener('input', () => {
        if (inputList[i].value == '')
        {
            inputList[i].setAttribute('class', 'empty');
        }
        else
        {
            inputList[i].removeAttribute('class', 'empty');
        }
    });
}

//Password-match checking algorithm
const confirmPass = document.querySelector('#confirm-pass');
const pass = document.querySelector('#pass');

confirmPass.addEventListener('input', () => {
    confirmPass.setAttribute('pattern', pass.value);
});