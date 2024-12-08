/** 
 * The following HTML codes were written under the inspiration and guide of a 
 * code institute student project sample(https://github.com/Patteerrik/sports-quiz/blob/main/assets/js/rules.js)
 * This code is to load the welcome page before the quiz page */

document.addEventListener("DOMContentLoaded", function(){

    const guideButton = document.getElementById("guide");
    const guideElement = document.getElementById("guide-content");
    const closeButton = document.getElementById("close");

    guideButton.addEventListener("click", function() {

        if(guideElement.style.display === "none") {      //when the guide button is clicked
            guideElement.style.display = "block";
        } else {
            guideElement.style.display = "block";
        }
    });

    closeButton.addEventListener("click", function() {   // this is to close the guide window
        guideElement.style.display = "none";
    });
});