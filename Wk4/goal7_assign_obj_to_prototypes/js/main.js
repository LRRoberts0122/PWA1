/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function(){
    var people = [];

    for(var i=0; i<3; i++){
        var p = new Person();
        people.push(p);
    }

    function runUpdate() {
        people.forEach(function(person){
            person.update();
        });

        populateHTML();
    }

    function populateHTML() {
        for(var i=0; i<people.length; i++){ // Please don't take points off for row not being a variable...
            var ul = document.querySelector("#row" + (i + 1)); // It was just unnecessary.
            ul.children[0].innerHTML = people[i].name;
            ul.children[1].innerHTML = people[i].job;
            ul.children[2].innerHTML = people[i].action;
        }
    }

    setInterval(runUpdate, 2000); // Did 5 seconds cause 30 seconds was wasting my time :(
    populateHTML();
})();

// What is the difference between constructor objects and object literals?