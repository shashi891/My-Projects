let output = document.getElementById('myInpt');
buttons = document.querySelectorAll('button');
var screenValue = '';
// console.log(buttons);


for (let i = 0; i < buttons.length; i++) {
    // console.log(buttons[i]);
    buttons[i].addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText);

        if (buttonText == "x") {
            buttonText = '*';
            screenValue += buttonText;
            output.value = screenValue;

        }
        else if (buttonText == 'c') {
            screenValue = "";
            output.value = screenValue

        }
        else if (buttonText == '=') {
            output.value = eval(screenValue);
        }

        else {
            screenValue += buttonText
            output.value = screenValue

        }

    })


}











