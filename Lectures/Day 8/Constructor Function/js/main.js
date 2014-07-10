/**
 * Created by TheFishbowl on 6/19/14.
 */
(function(){
//    var stuent = {
//        name: "Lindsay",
//        age: 22,
//        id: 1817334
//    };

    var liz = new Student("Lindsay");
    var cory = new Student("Cory");

    function Student(n){
        this.name = n;
        this.age = 0;
        this.id = 0;
    }

    // 5 names
    // random age
    // random id

    var nameBank = ["Joe","Liz","Mark","Steve","Kelly"];
    var students = [];

    for(var i=0; i<1000; i++){
        var student = new Student(nameBank[~~(Math.random() * nameBank.length)]);
        student.age = ~~(Math.random() * 50 + 18);
        student.id = ~~(Math.random() * 2000000 + 1000000);
        students.push(student);
    }

    displayStudents();

    function displayStudents(){
        for(var i=0; i<students.length; i++){
            console.log("******Student " + (i+1) + "******");
            console.log("Name: " + students[i].name);
            console.log("Age: " + students[i].age);
            console.log("ID: " + students[i].id);
            console.log("=====================")
        }
    }
})();