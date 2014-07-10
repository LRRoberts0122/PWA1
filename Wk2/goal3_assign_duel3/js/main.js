/*
* Created by TheFishbowl on 6/3/14.
* By: Lindsay Roberts
* Wednesday, June 04, 2014
* Duel Assignment
* Note: I had messed up my Repository, and could no longer commit changes, so I remade the repo.
*/
(function(){
    var _roundCounter = 0;
    var _displayText = document.getElementById("round_number").getElementsByTagName("input")[0];
    var _maxRounds = 10; // Whatever you want.
    var _maxDamage = 20; // Whatever you want.
    var _button = document.getElementById("fight_btn").getElementsByTagName("a")[0];
    // PUT FIGHTERS IN AN ARRAY

    var players = [
        {
            name: document.querySelector("#kabal").id,
            hp: Number(document.querySelector("#kabal p").innerHTML),
            text: document.querySelector("#kabal p")
        },
        {
            name: document.querySelector("#kratos").id,
            hp: Number(document.querySelector("#kratos p").innerHTML),
            text: document.querySelector("#kratos p")
        }
    ];

    _displayText.setAttribute("value","Click \"Fight\" to Start!");
    _button.addEventListener("click", onClick);


    function fight(p1, p2, dmg) {
        p1.hp -= Math.floor(Math.random() * dmg);
        p2.hp -= Math.floor(Math.random() * dmg);

        checkWinner(p1, p2);
    }

    function checkWinner(p1, p2) {
        if(p1.hp < 1 && p2.hp < 1){
            p2.hp = 0;
            p1.hp = 0;
            _displayText.setAttribute("value", "DOUBLE FATALITY!");
            _button.removeEventListener("click", onClick);
        }else if(p1.hp < 1){
            p1.hp = 0;
            _displayText.setAttribute("value", p2.name + " wins!");
            _button.removeEventListener("click", onClick);
        }else if(p2.hp < 1){
            p2.hp = 0;
            _displayText.setAttribute("value", p1.name + " wins!");
            _button.removeEventListener("click", onClick);
        }else{
            _roundCounter++;
            _displayText.setAttribute("value", "ROUND " + _roundCounter);
            if(_roundCounter===_maxRounds){
                if(p1.hp > p2.hp){
                    _displayText.setAttribute("value", p1.name + " wins by technicality!");
                    _button.removeEventListener("click", onClick);
                }else if(p1.hp < p2.hp){
                    _displayText.setAttribute("value", p2.name + " wins by technicality!");
                    _button.removeEventListener("click", onClick);
                }
            }
        }

        p1.text.innerHTML = p1.hp;
        p2.text.innerHTML = p2.hp;
    }

    function onClick() {
        fight(players[0],players[1], _maxDamage);
    }
})();