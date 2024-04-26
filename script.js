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

//Set password input title
let titleText = "The password must contain:\n" + 
                "1. At least one lower-case alphabet\n" +
                "2. At least one upper-case alphabet\n" +
                "3. At least one digit\n" +
                "4. At least one symbol (!,@,#,$,etc)";
pass.setAttribute("title", titleText);