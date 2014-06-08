/**
 * Created by TheFishbowl on 6/5/14.
 */

var student1 = [90, 98, 89, 95, 100];
var student2 = [88, 97, 95, 85, 92];

student2.splice(1,1); // Index you start at, and number of items to delete.

getLowest(student1, student2);

function getLowest(arr1, arr2){
    if(Math.min.apply(Math, arr1) > Math.min.apply(Math, arr2)){
        console.log(Math.min.apply(Math, arr2));
    }else{
        console.log(Math.min.apply(Math, arr1));
    }
}

// If you simply want to truncate the decimal portion, use a bitwise operator (.e.g |0)
// which will treat its operand as a signed 32bit integer.