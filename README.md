# Sign-Up Form

Site Link: https://blue0206.github.io/sign-up-form/     

This project is a part of the Intermediate HTML/CSS curriculum of The Odin Project.
It seemed easy at first but now I realize why form controls are considered difficult,
especially with styling.     

I had to rack up my brain over how to prevent `:invalid` pseudo-class from accessing
empty input fields with required attribute. My initial solution was to make use of
`invalid` event listener using JS but it had two problems:    
1. It came into affect AFTER the form was submitted, and 
2. Second, its effect wasn't as dynamic as using `:invalid` pseudo-class (i.e., the 
    styling getting removed by itself when the input is no longer invalid.)    
Ultimately, I came up with the idea of setting class attribute of "empty" on each
input element and targeting only those inputs with `:invalid` which do not have 
"empty" class (using `:not(.empty)` selector). The class is added and removed via JS 
depending whether the input element has content or not.     

Another MAJOR problem I had to tackle in this project was validating password and
phone number through RegEx pattern. This was a valuable opportunity for me to learn
the topic and I did.    
I came up with a RegEx pattern for password so that it would be valid only if it
contains:    
- At least one lower-case alphabet
- At least one upper-case alphabet
- At least one digit
- At least one symbol
- Is at least 8 characters long     
Since I had no idea what kind of phone number to validate, I just added validation
for any 10 digit number and 11 digit in case the number starts with 0.     

This was my first project where I used the `position` property extensively. I came up
with the idea of using it when I thought about having a login panel instead of a 
login page. `position` property helped me get exactly what I wanted. I just made a div
and applied `position: absolute` to it and I had it covering the DOM.    
Next, I used the box-shadow property with spread set to maximum and color as black in
order to hide the DOM elements in the background. With this, I ended up having a simple
login panel which could be opened and closed with buttons.    
The opening and closing was made possible using `visibility: visible` and
`visibility: hidden` respectively making this my first time using the property and this
helped me get a tight grasp on the topic.    

Another thing I had trouble with was centering the login panel which had
`position: absolute` set on it. I tried using CSS units like vh, %, vw, etc. but it did
not work as I wanted it to. In the end, I had to settle for `align-self: center` and
`justify-self: center` properties to center the panel.     

This project marked my first time using **`@font-face`** declaration and I ended up
uploading some custom fonts including the widely famous `Roboto`. Even though there
were different types of `Roboto` font (bold, italic, normal, bold-italic), instead of
naming them differently, I ended up giving them the same name in declaration and different
font-weight and font-style values. This made it easier for me to call the type of font I
wanted using the two properties alone.        

This project was a valuable experience. I had a good time thinking about how to tackle the
problems I faced in the course of the project. It helped me learn some new stuff like `RegEx`,
`@font-face`, etc. and also helped me bolster my understanding of concept I already knew.