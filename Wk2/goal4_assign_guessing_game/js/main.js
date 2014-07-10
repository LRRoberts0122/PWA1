/**
 * GUESSING GAME:
 *
 * Created By: Lindsay Roberts
 * Date: June 17, 2014 @ 6:15 AM
 * 
 * GUESSING GAME
 */

//Game variables
(function (){
    var error;
    var magicNum = ~~(Math.random() * 10) + 1;
    var score = 0;
    var dom = {
        input: document.querySelector("#input"),
        output: document.querySelector("#output"),
        button: document.querySelector("button")
    };

    dom.input.addEventListener("keydown", onEnter);
    dom.button.addEventListener("click", onClick);

    function onClick() {
        validate();
    }

    function onEnter(event) {
        if(event.keyCode == 13){
            validate();
        }
    }

    function validate(){

        if(isNaN(dom.input.value) || dom.input.value > 10 || dom.input.value < 1){
            if(!document.querySelector("#error")){
                error = document.createElement("p");
                error.id = "error";
                error.innerHTML = "<p>Please enter a number 1 through 10!</p>";
                error.setAttribute("style", "color: #F00;");
                document.body.insertBefore(error, document.querySelector("input"));
            }else{
                error.innerHTML = "<p>Please enter a number 1 through 10!</p>";
            }
        }else{
            if(document.querySelector("#error")){
                error.innerHTML = "";
            }
            checkWinner();
        }
    }

    function checkWinner() {
        console.log('Input:', dom.input.value);
        console.log('Magic Number:', magicNum);
        console.log('Score:', score);

        score++;

        if (dom.input.value == magicNum) {
            dom.output.innerHTML = 'You got it! The magic number was ' + magicNum;
            dom.input.removeEventListener("keydown", onEnter);
            dom.input.disabled = true;
            dom.button.removeEventListener("click", onClick);
            dom.button.disabled = true;
        } else if (score == 3) {
            dom.output.innerHTML = 'Game over! The magic number was ' + magicNum;
            dom.input.removeEventListener("keydown", onEnter);
            dom.input.disabled = true;
            dom.button.removeEventListener("click", onClick);
            dom.button.disabled = true;
        } else if (dom.input.value > magicNum) {
            dom.output.innerHTML = "Lower... " + (3 - score) + " tries remaining.";
        } else if (dom.input.value < magicNum) {
            dom.output.innerHTML = "Higher... " + (3 - score) + " tries remaining.";
        }
    }
})();