/*
	* Mid Terms for PWA-1
*/

(function(){
    var counter = 0;
    var date = new Date();
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    var students = [];

    addData(
        "Ashlin Brissette",
        "1329 Green Circle",
        "Sunset", "Mississippi",
        [~~(Math.random() * 50 + 51), ~~(Math.random() * 50 + 51), ~~(Math.random() * 50 + 51)]
    );

    addData(
        "Bardo Donner",
        "8993 Shady Limits",
        "Gayosa", "Alabama",
        [~~(Math.random() * 50 + 51), ~~(Math.random() * 50 + 51), ~~(Math.random() * 50 + 51)]
    );

    addData(
        "Launce Bernabe",
        "351 Dewy Lagoon Row",
        "Zuck", "Ohio",
        [~~(Math.random() * 50 + 51), ~~(Math.random() * 50 + 51), ~~(Math.random() * 50 + 51)]
    );

    document.querySelector("a").addEventListener("click", onClick);

    displayData(students[counter]);

    logData(students);

    addData(
        "Gregorio Pope",
        "1556 Easy Butterfly Field",
        "The Black Cat", "Virginia",
        [~~(Math.random() * 50 + 51), ~~(Math.random() * 50 + 51), ~~(Math.random() * 50 + 51)]
    );

    logData(students);

    function logData(s) {
        console.log("*****STUDENTS*****");
        for(var i=0; i< s.length; i++){
            console.log("1. Name: " + s[i].name);
            console.log("2. Address: "
            + s[i].address.street + " "
            + s[i].address.city + " "
            + s[i].address.state);
            console.log("3. Grades: " + s[i].grades);
            console.log("4. Date: "
                + months[date.getMonth()] + " "
                + date.getDate() + ", "
                + date.getFullYear());
            console.log("5. Average: " + s[i].getAverage(s[i].grades));
            console.log("------------------");
        }
        console.log("==================");
    }

    function addData(name, street, city, state, grades){
        students.push(
            new Student(
                name,
                street,
                city,
                state,
                grades
            )
        );
    }

    function onClick(){
        counter++;
        if(counter == students.length - 1) {
            document.querySelector("a").removeEventListener("click", onClick);
            document.querySelector("a").innerHTML = "DONE!!!";
        }
        displayData(students[counter]);
    }

    function displayData(student){
        var average = student.getAverage(student.grades);
        document.querySelector("#name p").innerHTML = "Name: " + student.name;
        document.querySelector("#address p").innerHTML =
            "Address: <br />" +
            student.address.street + "<br />" +
            student.address.city + "<br />" +
            student.address.state + "<br />";
        document.querySelector("#grades p").innerHTML = "Grades: " + student.grades;
        document.querySelector("#date p").innerHTML =
            "Date: " +
            months[date.getMonth()] + " "
            + date.getDate() + ", "
            + date.getFullYear();
        document.querySelector("#avg p").innerHTML = "Average: " + average + " " + student.getLetterGrade(average);
    }

})();