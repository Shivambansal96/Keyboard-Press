let typedNumber = document.querySelector("#pressedNumber");
let headingOne = document.querySelector("h1");
let headingTwo = document.querySelector("h2");

function randomColor() {
    let str = "0123456789abcdef";
    let ColorStr = "#";

    for(let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * str.length);
        ColorStr += str[randomIndex];

        return ColorStr;
    }
}

function display(e) {    
    let pressKey = e.key;
    let keyCode = e.keyCode

    headingOne.innerHTML = `You pressed <span> ${pressKey} </span>`;

    document.querySelector("body").style.backgroundColor = randomColor();


    headingTwo.innerHTML = `keyCode <span> ${keyCode} </span>`;
 
    if(pressKey == 0 || pressKey == 1 || pressKey == 2 ||  pressKey == 3 ||  pressKey == 4 ||  pressKey == 5 ||  pressKey == 6 ||  pressKey == 7 || pressKey == 8 || pressKey == 9) {

        var audio = new Audio('keyPressOne.mp3');
        audio.play();
    
    }

    else {
        var sound = new Audio('keyPressTwo.mp3');
        sound.play();
    }
};

document.addEventListener("keydown", display);
