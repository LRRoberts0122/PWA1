/**
 * Created by TheFishbowl on 6/12/14.
 */
(function() {
    console.log("Practice Loaded...");
    // Need to create x3 students.
    // They have to be Object Literals.

//    var student1 = new student();
//    var student2 = new student();
//    var student3 = new student();
//
//    student1.name = "Lindsay";
//    student1.address.street = "5584 Century 21 Blvd.";
//    student1.address.city = "Orlando";
//    student1.address.state = "FL";
//    student1.grades = [100, 98, 95];
//
//    student2.name = "Mark Lyck";
//    student2.address.street = ;
//    student2.address.city = "Århus";
//    student2.address.state = "DK";
//    student2.grades = [95, 92, 96];
//
//    student3.name = "Lindsay";
//    student3.address.street = "5584 Century 21 Blvd.";
//    student3.address.city = "Orlando";
//    student3.address.state = "FL";
//    student3.grades = [100, 98, 95];
//
//    function student() {
//        this.name,
//        this.address = {
//            street: "",
//            city: "",
//            state: ""
//        },
//        this.grades = []
//    }
    var counter = 0;
    var classroom = [];

//    var classroom = [
//        {
//            name: "Lindsay Roberts",
//            address: {
//                street: "5584 Century 21 Blvd.",
//                city: "Orlando",
//                state: "FL"
//            },
//            grades: [90, 95, 100]
//        },
//        {
//            name: "Mark Lyck",
//            address: {
//                street: "3, 3, 2 Åhusene",
//                city: "Århus",
//                state: "DK"
//            },
//            grades: [80, 90, 100]
//        },
//        {
//            name: "Dana Robins",
//            address: {
//                street: "1234 Somewhere St",
//                city: "New York",
//                state: "NY"
//            },
//            grades: [70, 80, 90]
//        }
//    ];

    addStudent("Lindsay Roberts", "5584 Century 21 Blvd.", "Orlando", "FL", [90, 95, 100, 100, 98, 92]);
    addStudent("Mark Lyck", "3, 3, 2 Åhusene", "Århus", "DK", [80, 90, 100, 95]);
    addStudent("Amanda Grace", "18811 SE 162nd ST", "Weirsdale", "FL", [70, 80, 90, 100, 88]);

    document.querySelector("button").addEventListener("click", onClick);
    displayHTML();
    showStudents();

    addStudent("John Doe", "123 Elm St.", "Shady Oaks", "NJ", [50, 66, 88, 72, 0]);
    showStudents();

    function showStudents() {
        console.log("*********Student Data**********");
        for(var i=0; i<classroom.length; i++){
            console.log("Name: " + classroom[i].name);
            console.log("Address: " + classroom[i].address.street + ", " + classroom[i].address.city + ", " + classroom[i].address.state);

            for(var j=0; j<classroom[i].grades.length; j++){
                var g = console.log("Grade " + (j + 1) + ": " + classroom[i].grades[j]);
            }

            console.log("==============================");
        }
    }

    function onClick() {
        counter++;
        if(counter > classroom.length - 1) { // You can also use counter === classroom.length
            document.querySelector("button").removeEventListener("click", onClick);
            document.querySelector("button").innerHTML = "DONE!";
            //counter = 0;
        }

        displayHTML();
    }

    function addStudent(name, street, city, state, grades) {
        classroom.push({
            name: name,
            address: {
                street: street,
                city: city,
                state: state
            },
            grades: grades
        })
    }

    function displayHTML() {
        document.querySelector("#name").innerHTML = "Name: " + classroom[counter].name;
        document.querySelector("#street").innerHTML = "Address: <br /> <br />" + classroom[counter].address.street;
        document.querySelector("#city").innerHTML = classroom[counter].address.city;
        document.querySelector("#state").innerHTML = classroom[counter].address.state;
        document.querySelector("#grades").innerHTML = "Grades: " + classroom[counter].grades;
        console.log(getAverage(classroom[counter].grades));
    }

    function getAverage(arr){
        var total = 0;
        for (var j = 0; j < arr.length; j++){
            total += arr[j];
        }

        return total / arr.length;
    }
})();