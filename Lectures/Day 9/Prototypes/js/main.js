/**
 * Created by TheFishbowl on 6/21/14.
 */
// An OBJECT is a collection of members (properties and methods).

(function(){
    var kennel = [];
    var names = ["Fido", "Max", "Shadow","Zeus","Sadie","Teddie"];
    var breeds = ["Ovcharka", "German Shepherd", "Boxer", "Doberman"];
    var food = ["Puppy Chow", "Wet Food", "Scraps", "Treats", "Meat", "Trash"];

    // Use Anonymous function with prototype to create methods for your Constructor Objects
    for(var i=0; i<100; i++){
        var d = new Dog(names[~~(Math.random()*names.length)]);
        d.breed = breeds[~~(Math.random()*breeds.length)];
        d.food = food[~~(Math.random()*breeds.length)];
        d.age = ~~(Math.random()*15+1);
        d.bark();
        d.eat();
        console.log(d);
        kennel.push(d);
    }
})();