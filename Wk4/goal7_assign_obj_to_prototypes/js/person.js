/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

// The instructions were kind of confusing, so apologize if I just did things my own way.
(function(){
    var names = ["Timothy Christensen", "Sylvia Howell", "Kyle Cunningham", "Michael Ellis", "Lawrence Sims"];
    var actions = ["Sleeping", "Eating", "Working", "Driving", "Partying", "Exercising", "Shopping", "Cooking", "Studying"];
    var jobs = ["Actor", "Judge", "Retail", "Nurse", "Accountant", "Teacher", "Officer", "Secretary", "Janitor", "Student"];

    function Person() {
        this.name = names[~~(Math.random() * names.length)];
        names.splice(names.indexOf(this.name),1);

        this.action = actions[~~(Math.random() * actions.length)];

        this.job = jobs[~~(Math.random() * jobs.length)];
    }

    Person.prototype.update = function() {
        this.action = actions[~~(Math.random() * actions.length)];
    };

    window.Person = Person;
})();