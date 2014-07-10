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
    var students = [
        {
            name: "Ashlin Brissette",
            address: {
                street: "1329 Green Circle",
                city: "Sunset",
                state: "Mississippi"
            },
            grades: [83, 88, 79]
        },
        {
            name: "Bardo Donner",
            address: {
                street: "8993 Shady Limits",
                city: "Gayosa",
                state: "Alabama"
            },
            grades: [76, 89, 93]
        },
        {
            name: "Launce Bernabe",
            address: {
                street: "351 Dewy Lagoon Row",
                city: "Zuck",
                state: "Ohio"
            },
            grades: [92, 89, 85]
        }
    ];

    document.querySelector("a").addEventListener("click", onClick);

    displayData(students[counter]);

    logData(students);

    addData(
        "Gregorio Pope",
        "1556 Easy Butterfly Field",
        "The Black Cat", "Virginia",
        [98, 92, 100]);

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
            console.log("------------------");
        }
        console.log("==================");
    }

    function addData(nam, str, cit, sta, gra){
        students.push({
            name: nam,
            address: {
                street: str,
                city: cit,
                state: sta
            },
            grades: gra
        });
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
        document.querySelector("#avg p").innerHTML = "Average: " + getAverage(student.grades);f
    }

    function getAverage(grades) {
        var total = 0;
        for(var i=0; i<grades.length; i++){
            total += grades[i];
        }

        return ~~(total / grades.length);
    }

})();