/**
 * Created by TheFishbowl on 6/26/14.
 */
(function(){
    var Student = function(name, street, city, state, grades) {
        this.name = name;
        this.address = {
            street: street,
            city: city,
            state: state
        };
        this.grades = grades;
    };

    Student.prototype.getAverage = function(g) {
        var total = 0;

        g.forEach(function(grade){
            total+=grade;
        });

        return ~~(total / g.length);
    };

    Student.prototype.getLetterGrade = function(avg) {
        if(avg < 60){
            return "F";
        }else if(avg < 70){
            return "D";
        }else if(avg < 75){
            return "C";
        }else if(avg < 80){
            return "C+";
        }else if(avg < 85){
            return "B";
        }else if(avg < 90){
            return "B+";
        }else if(avg < 95){
            return "A";
        }else if(avg < 100){
            return "A+";
        }
    };

    window.Student = Student;
})();