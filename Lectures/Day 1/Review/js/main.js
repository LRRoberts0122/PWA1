/**
 * Created by TheFishbowl on 6/3/14.
 */

// Two Types of Functions in JavaScript
// ----- NAMED functions
// ----- ANONYMOUS functions

// NAMED
// function hello(...){ }

// ANONYMOUS
// var anon = function(...){ }

// DEFINITIONS
// invocation: When you call a function.
// element: The items in an array.

    var test = "I'm testing...";

var name = getName();
var length = Math.random() * 10;
var width = Math.random() * 10;

var grades = [90, 80, 100];
var g = grades[0]; // grades[0] is articulated as "grades sub zero"
// Array Access Notation - ON THE PRACTICAL
// *UNDERSTAND:
grades.push(95,98);
// grades.pop(); -- Removes the last item in the array.
// grades.length(); -- Tells you the number of items in the array.
console.log(grades);

var data = [3,5,7,1,9,2,5,7];
var data2 = [3,4,5];

/*
var myNumber = lowestNum(data);
console.log("The Lowest Number is " + myNumber);
*/

console.log(lowestNum(data));
console.log(getAverage(data));

console.log(findNum(data2,4));

greetings(name);
console.log("The area is: " + getArea(length,width));


// SAY HELLO
function getName(){
    name = "Lindsay";
    return name;
}
function greetings(name){
    console.log("Hello " + name + "!");
}

// GET AREA
function getArea(l, w) {
    // var area = l * w;
    // return area;
    return l * w;
}

// GET LOWEST NUMBER
function lowestNum(arr){
    var lowNum = arr[0];
    for (var i = 1; i < arr.length; i++){
        if(lowNum > arr[i]){
            lowNum = arr[i];
        }
    }

    return lowNum;
}

// GET AVERAGE
function getAverage(arr){
    var total = 0;
    for (var j = 0; j < arr.length; j++){
        total += arr[j];
    }

    return total / arr.length;
}

// FIND NUMBER
function findNum(newarr, num){
    for(var i = 0; i < newarr.length; i++){
//        console.log("Num" + num);
//        console.log("Arr" + newarr[i]);
        if(newarr[i] == num){
            return true;
        }
    }
    return false;
}