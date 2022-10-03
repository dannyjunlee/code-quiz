// DEPENDENCIES
var startButton = document.querySelector("#start-button");
var timerEl = document.getElementById("timer");

// DATA
    // Questions and Answers
    // Initially empty list of quiz takers and their scores

// FUNCTIONS
    // When "start" button is clicked, quiz and timer starts
        
startButton.addEventListener("click", function() {

});

// Timer needs separate function probably
function countdown() {
    var timeLeft = 60;

    var timeInteval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;

        // if (timeLeft === 0) {
        //     clearInterval(timeInteval);
        // }
    }, 1000);
}

    // Determine whether answer selected is right or wrong
        // If right, move on to next question
        // If wrong, highlight red and deduct time from timer
    // Display next question
    // When user inputs initials, add to list of finished quizzes
        // Order the list based on score/time

// USER INTERACTIONS
    // User clicks "start" to start the quiz and timer
    // User clicks button to choose their answer
    // User clicks highscore link to display scoreboard
    // User presses keys to input initials for score

// INITIALIZATION