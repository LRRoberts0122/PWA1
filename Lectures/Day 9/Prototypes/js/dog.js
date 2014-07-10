/**
 * Created by TheFishbowl on 6/21/14.
 */
(function(){
    var toys = [];

    function Dog(n) {
        this.name = n;
        this.breed = "";
        this.food = "";
        this.age = 0;
    }
    // PROTOTYPES allow you to add functions(methods) to Objects
    Dog.prototype.bark = function() {
        var greetins = "I thought you were never coming back!";
        console.log("My name is " + this.name + "!" );
    };

    Dog.prototype.eat = function() {
        console.log("I like to eat " + this.food + "!");
    };

    window.Dog = Dog;
})();