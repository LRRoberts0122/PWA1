/**
 * Created by TheFishbowl on 6/7/14.
 */
// Self-Executing Function
// Anonymous Function
// Encapsulation / Closure
(function(){
    var grades = [30, 40, 50];
    console.log("running",grades);

    var total = 0;
    grades.forEach(getAverage);

    function getAverage(numb){
        total += numb;
        console.log(total);
    }

//    function getAverage(numbs) {
//        var total = 0;
//        for (var i = 0; i < numbs.length; i++){
//            total += numbs;
//        }
//
//        return total / numbs.length;
//    }
}());