$(document).ready(function () {
    console.log("ready!");

    //Declare variable to hold setInterval timer
    var intervalID;

    //Declare variable equal to the start time
    var time = 15;

    //declare variable to track the number of questions answered correctly
    var correct = 0;

    //create a function to hide the start button when clicked
    $("#startButton").click(function () {
        $("#startButton").hide();
        $(".questions").hide();
        $(".questions").show();

        // create timer to countdown from 15 seconds once the start button is clicked
        intervalID = setInterval(count, 1000);
        function count() {
          //  $("#timeRemaining-text").text("You have " + time + " seconds left.");
            time--;

            if (time < 0) {
                $(".questions").hide();
                clearInterval(intervalID);
                // $("#timeRemaining-text").hide();
                // $("#done-text").show();
                // $("#done-text").text("You answered " + correct + " out of the 6 questions correctly.");

            }
        }
    });

































});
