// DEPENDENCIES
var startButton = document.getElementById("start-button");
var timerEl = document.getElementById("timer");
var headerEl = document.getElementsByClassName("main-text");
var questionListEl = document.getElementsByClassName("question-list");

// DATA
    // Win-Lose status and trackers
var wins = 0;
var losses = 0;
var isWin = false;

    // Questions and Answers
var questionOne = "Which of the following is NOT a primitive data type?";
var questionOneQs = [
    "Boolean",
    "Number",
    "Function",
    "String"
];
var answerOne = "Function";

var questionTwo = "How do you assign a variable in JavaScript?";
var questionTwoQs = [
    "assign",
    "var",
    "Just name it",
    "There are no variables in JavaScript"
];
var answerTwo = "var";

var questionThree = "Which of the following is NOT part of the pseudocoding process?";
var questionThreeQs = [
    "Data",
    "Determinations",
    "Functions",
    "Dependencies"
];
var answerThree = "Determinations";

    // Initially empty list of quiz takers and their scores
var quiztaker = [];
var highscore = [];

// FUNCTIONS
    // When "start" button is clicked, quiz and timer starts
function gameStart() {
    headerEl.innerHTML = questionOne;
    for (let i = 0; i < questionOneQs.length; i++) {
        var itemList = document.createElement("li");
        itemList.innerHTML = questionOneQs[i];
        questionListEl.appendChild(itemList);
    }
};

startButton.addEventListener("click", gameStart());

function timer() {
    var timeLeft = 75;
    var timeInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;
    })

    if (timeLeft === 0) {
        clearInterval(timeInterval);
        if (isWin) {
            headerEl.innerHTML = "Congrats, you win!"
        }
    }
};

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