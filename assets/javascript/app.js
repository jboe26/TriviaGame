$(document).ready(function () {
    console.log("ready!");


    var correctAnswers = 0;
    var missed = 0;
    var incorrectAnswers = 0;

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
            $("#start").hide();
            clearInterval(intervalID);
        }

        //create a function to hide the start button when clicked
        $("#startButton").click(function () {
            $("#startButton").hide();

            $(".questions").hide();
            $(".questions").show();



        });

        $("#doneButton").click(function () {
            $(".questions").hide();
            clearInterval(intervalID);


            $("#correctAnswers").text("You got " + correctAnswers + " questions right.");
            $("#missed").text("You missed " + missed + " questions.");
            $("#incorrectAnswers").text("You got " + incorrectAnswers + " questions wrong.")

            evaluateQuestion("answer1", "#a");
            evaluateQuestion("answer2" , "#b");
            evaluateQuestion("answer4", "#c");
            evaluateQuestion("answer5" , "#d");
            evaluateQuestion("answer6" , "#e");
        });

        function evaluateQuestion(currentQuestion, id) {

            var radioValue = $("input[name='" + currentQuestion + "']:checked").val();
            if (radioValue) {
                $(id).val()
            }
            else {
                missed++;
            }
 
    

    }
}

});
