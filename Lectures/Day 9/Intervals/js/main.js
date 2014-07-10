/**
 * Created by TheFishbowl on 6/21/14.
 */
// Intervals: setInterval
// For Graphics: requestAnimationFrame

(function(){
    var clock = 0;
    // 1000/60 = 60 times per second! :)
    var interval = setInterval(update, 30000);
    update();

    function update() {
        clock++;

        if(clock<60){
            console.log("Tick, Tock: " + clock);
        }else{
            console.log("Let's go home!");
            clearInterval(interval);
        }
    }

    function lowest(num1, num2){
        if(num1 > num2){
            return num1;
        }else{
            return num2;
        }
    }
})();