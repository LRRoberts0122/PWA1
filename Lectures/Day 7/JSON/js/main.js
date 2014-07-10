/**
 * Created by TheFishbowl on 6/17/14.
 */
// What you need to know
// It's a data format...
// JSON stands for: JavaScript Object Notation
// "Keys" are the properties in JSON
// "Enumerate" = "Loop Through"

(function(){
//    var text = document.querySelector("#result");
//    text.innerHTML = person.first;
//    text.innerHTML = person.favorites.food;
//    text.innerHTML = person.skills[1].category;
    displayTests("PHP");

    function displayFavorites(){
        var counter = 0;

        for(var prop in person.favorites){
            counter++;
            document.querySelector("#line" + counter).innerHTML = prop + ": " + person.favorites[prop];
        }
    }

    // Show all tests of PHP
    function displayTests(c){
        for(var i=0; i<person.skills.length; i++){
            if(c == person.skills[i].category){
                console.log(person.skills[i].category + " Test Scores");
                for(var j=0; j<person.skills[i].tests.length; j++){
                    console.log(person.skills[i].tests[j].name + ": " + person.skills[i].tests[j].score);
                }
            }
        }
    }
})();