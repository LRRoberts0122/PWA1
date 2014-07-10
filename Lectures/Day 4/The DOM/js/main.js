/**
 * Created by TheFishbowl on 6/10/14.
 */
console.log("loaded");
(function(){
    var grades = [92, 89, 78];

    for (var i = 0; i < grades.length; i++){
        document.getElementsByTagName("p")[i].innerHTML = grades[i];
    }

    document.querySelector("#btn").addEventListener("click", onClick);

    function onClick(){
        document.querySelector("#average").innerHTML = "The average is: " + getAverage(grades);
    }

    function getAverage(arr){
        var total = 0;
        for (var j = 0; j < arr.length; j++){
            total += arr[j];
        }

        return total / arr.length;
    }
})();