let typedNumber = document.querySelector("#pressedNumber");
let headingOne = document.querySelector("h1");
let headingTwo = document.querySelector("h2");

function display(e) {    
    let pressKey = e.key;
    let keyCode = e.keyCode
    headingOne.innerText = `You pressed ${pressKey}`;
    headingTwo.innerText = `keyCode ${keyCode}`;

    // headingOne.style.backgroundColor = "";
    // console.log(pressKey);
    
    // headingTwo.style.backgroundColor = "";
    
    if(pressKey == Number) {

        for(let i = 0; i < 10; i++) {
            if(pressKey == i) {
                var audio = new Audio('keyPressOne.mp3');
                audio.play();
        
            }
        }

    }

    // else {

    //     for(let i = "a"; i <= "z"; i++) {
    //         if(pressKey == i) {
    //             var sound = new Audio('keyPressTwo.mp3');
    //             audio.play();
    //         }
    //     }
    // }

    

    
};

document.addEventListener("keydown", display);
