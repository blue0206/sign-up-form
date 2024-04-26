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
const passContainer = document.querySelector('.pass');
const confirmPass = document.querySelector('#confirm-pass');
const pass = document.querySelector('#pass');
const prompt = document.createElement('div');

confirmPass.addEventListener('input', () => {
    confirmPass.setAttribute('pattern', pass.value);
    if (confirmPass.value != pass.value)    
    {
        prompt.textContent = "* Passwords do not match";
        passContainer.appendChild(prompt);
    }
    else
    {
        prompt.textContent = "";
        passContainer.appendChild(prompt);
    }
});

//Set password input title
let titleText = "The password must contain:\n" + 
                "1. At least one lower-case alphabet\n" +
                "2. At least one upper-case alphabet\n" +
                "3. At least one digit\n" +
                "4. At least one symbol (!,@,#,$,etc)" +
                "5. At least 8 characters";
pass.setAttribute("title", titleText);

//Set event listener for log in button
const loginPanel = document.querySelector(".login");
const loginPanelBtn = document.querySelector(".log-in");

loginPanelBtn.addEventListener('click', () => {
    loginPanel.style.visibility = "visible";
});

//Set event listener for login panel close button
const closeBtn = document.querySelector('.exit-login');

closeBtn.addEventListener('click', () => {
    loginPanel.style.visibility = "hidden";
});