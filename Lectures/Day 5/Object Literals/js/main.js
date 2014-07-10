/**
 * Created by TheFishbowl on 6/12/14.
 */
(function() {
    console.log("Loaded...")

    // EXTRA CREDIT:
    // Arrays and Objects are DATA STRUCTURES - a way to format data.

    var car = [35, "toyota", 15000, "grey", "rx330"];

    var auto = {
        mpg: 35,
        make: "Toyota",
        price: 15000,
        color: "Grey",
        model: "RX330"
    };

    console.log("Array: ", car[3]);
    console.log("Object Literal: ", auto.color); // Dot Syntax
    console.log("Object Literal: ", auto["color"]) // Array Access Notation

    // Array Access Notation allows the use of characters that can't be used with dot notation.

    var dog = {
        name: "Zim",
        breed: "Boxer",
        color: "Brindle"
    }

    var cat = {}
    cat.name = "Kovu";
    cat.breed = "Abyssinian";
    cat.color = "Beige";

    var student = {
        name: "",
        age: 0,
        address: {
            street: "5584 Century 21 Blvd.",
            city: "Orlando",
            state: "FL",
            zip: 32807
        },
        grades: [
            80,
            90,
            100,
        ]
    };

})();