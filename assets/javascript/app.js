$(document).ready(function () {
    console.log("ready!");

    //Declare variable equal to the start time
    var time = 45;


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

            var answers = ["a", "b", "c", "d", "e", "f"];
            
            // console.log(answers);

            // trying to use this variable, not sure where-- i want it to be the correct answers for the questions. 
            
            // answers

            var correctAnswers = 0;
            var missed = 0;
            var incorrectAnswers = 0;

            for (i = 0; i < answers.length; i++) {
                var answerChoice = $(".question1")
            }



          // if ( (answers = "a") && (answers = "b") && (answers = "c") && (answers = "d") && (answers = "e") && (answers = "f") ) {
            //   correctAnswers = 6;
           // }
                

                

            $("#correctAnswers").text("You got " + correctAnswers + " questions right.");
            $("#missed").text("You missed " + missed + " questions.");
            $("#incorrectAnswers").text("You missed " + incorrectAnswers + " questions.")

        });


    }
});