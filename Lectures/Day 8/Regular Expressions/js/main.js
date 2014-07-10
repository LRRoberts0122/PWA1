/**
 * Created by TheFishbowl on 6/19/14.
 */
(function(){
    document.querySelector("#btn").addEventListener("click", onClick);
    var input = document.querySelector("#input");
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[a-zA-Z]{2,4}$/;
    function onClick() {
        emailRegex.test(input.value);
    }
})();
