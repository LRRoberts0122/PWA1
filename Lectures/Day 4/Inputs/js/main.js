/**
 * Created by TheFishbowl on 6/10/14.
 */
(function(){
    document.querySelector("button").addEventListener("click", onClick);

    var nameTF = document.querySelector("#nameTF");
    var greetingTxt = document.querySelector("h2");

    function onClick(){
        if(nameTF.value === "") {
            greetingTxt.setAttribute("style", "color:#FF0000;");
            greetingTxt.innerHTML = "ERROR! No name entered!";
        }else{
            greetingTxt.setAttribute("style", "color:#000;");
            greetingTxt.innerHTML = "Hello, " + nameTF.value;
        }
    }
})();