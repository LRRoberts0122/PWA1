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

    var _player1 = {
        name: document.getElementById("kabal").id,
        hp: document.getElementById("kabal").getElementsByTagName("p")[0].innerHTML
    };

    var _player2 = {
        name: document.getElementById("kratos").id,
        hp: document.getElementById("kratos").getElementsByTagName("p")[0].innerHTML
    };


    _displayText.setAttribute("value","Click \"Fight\" to Start!");
    _button.addEventListener("click", onClick);


    function fight(p1, p2, dmg) {
        p1.hp -= Math.floor(Math.random() * dmg);
        p2.hp -= Math.floor(Math.random() * dmg);

        document.getElementById("kabal").getElementsByTagName("p")[0].innerHTML = p1.hp;
        document.getElementById("kratos").getElementsByTagName("p")[0].innerHTML = p2.hp;

        checkWinner(p1, p2);
    }

    function checkWinner(p1, p2) {
        if(p1.hp < 1 && p2.hp < 1){
            document.getElementById("kabal").getElementsByTagName("p")[0].innerHTML = 0;
            document.getElementById("kratos").getElementsByTagName("p")[0].innerHTML = 0;
            _displayText.setAttribute("value", "DOUBLE FATALITY!");
            _button.removeEventListener("click", onClick);
        }else if(p1.hp < 1){
            document.getElementById("kabal").getElementsByTagName("p")[0].innerHTML = 0;
            document.getElementById("kratos").getElementsByTagName("p")[0].innerHTML = p2.hp;
            _displayText.setAttribute("value", p2.name + " wins!");
            _button.removeEventListener("click", onClick);
        }else if(p2[1] < 1){
            document.getElementById("kabal").getElementsByTagName("p")[0].innerHTML = p1.hp;
            document.getElementById("kratos").getElementsByTagName("p")[0].innerHTML = 0;
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
    }

    function onClick(event) {
        fight(_player1, _player2, _maxDamage);
    }
})();