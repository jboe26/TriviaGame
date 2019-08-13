$(document).ready(function () {
    console.log("ready!");

    //Declare variable equal to the start time
    var time = 120;


    $(".timer").text("You have " + time + " seconds remaining.");



    //Declare variable to hold setTimeout timer
    var intervalID = setInterval(count, 1000);
    function count() {
        $(".timer").text("You have " + time + " seconds remaining.");
        time--;

    if (time < 0) {
        $(".questions").hide();
        clearInterval(intervalID);
    }



    //declare variable to track the number of questions answered correctly
    var correct = 0;

    //create a function to hide the start button when clicked
    $("#startButton").click(function () {
        $("#startButton").hide();

        $(".questions").hide();
        $(".questions").show();


    
    });

    $("#doneButton").click(function () {
        $(".questions").hide();
        clearInterval(intervalID);

    var answers = ["a","b","c","d","e","f"];
    
    var correctAnswers = 0;

    // for (kliojp         )

    $("#correctAnswers").text("You got " + correctAnswers +" questions right.")


    
});

    
    }
});