/**
 * Created by TheFishbowl on 6/7/14.
 */
//console.log("Created");
//
//// Splice
//var p = [2,3,4,"Bob",5];
//p.splice(p.indexOf("Bob"),1);
//console.log(p);
//
//// Scope is the visibility of your variables.
//// JavaScript only has local and global.
//// All variables are Global by default.
//var score = 0;
//addToScore(20);
//// addToScore(5);
//
//console.log(points); // Points' Scope is GLOBAL. So it will returned undefined.
//
//function addToScore(amount){
//    var points = -100; // Points' Scope here is LOCAL. It will run. :)
//    console.log(points);
//    score+=amount;
//    console.log(score);
//}


//// Demonstrating Scope:
//var outer = 10;
//
//function inside(){
//    var inner = 5;
//}
//
//console.log(inner);
//

function outside() {
    var outer = 7;

    function inside() {
        var inner = 2;
    }

    console.log(outer,inner);
}

// By default, all variables are? _Global_
// Scope is? _Variable_Visibility_
// Prototype :)