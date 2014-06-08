/**
 * Created by TheFishbowl on 6/7/14.
 */

// Math.random() = 0 <= n < 1 -- Cannot be a 1 <3

// 1 - 6
// d = Math.random()*6 - Gives 0 - 5
// d = Math.floor(Math.random() * 6 + 1) - Gives 1 - 6

// 5 - 10
// d = Math.random() * 6 - Gives 0 - 5
// d = Math.floor(Math.random() * 6 + 5) - Gives 5 - 10

// d = Math.floor(Math.random() * 7 - 2) - Gives -2 - 4

// Binary Operation 1 2 4 8 16 32
// ~~ <-- Drops decimal as the operator

(function() {
//    DICE GAME

//    for(var i = 0; i < 100; i++){
//        var dice = ~~(Math.random() * 11 + 2);
//        console.log(dice);
//    }
    console.log(coolDate());

    function coolDate(){
        var today = new Date();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var month = months[today.getMonth()];
        var date = today.getDate();
        var year = today.getFullYear();
        return month + " " + date + ", " + year;
    }
})();