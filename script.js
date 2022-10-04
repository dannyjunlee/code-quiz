// DEPENDENCIES
var startButton = document.getElementById("start-button");
var timerEl = document.getElementById("timer");
var promptEl = document.getElementById("prompt");
var questionListEl = document.getElementById("question-list");

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
    "There are no such things"
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

var selected;
var answer;

    // Initially empty list of quiz takers and their scores
var quiztaker = [];
var highscore = [];

// FUNCTIONS
    // When "start" button is clicked, quiz and timer starts
startButton.addEventListener("click", function() {
    gameStart();
    timer();
});

function gameStart() {
    if (startButton.innerHTML == "Start") {
        promptEl.innerHTML = questionOne;
        for (let i = 0; i < questionOneQs.length; i++) {
            console.log(questionOneQs[i]);
            var eachQ = document.createElement("li");
            eachQ.innerHTML = questionOneQs[i];
            questionListEl.appendChild(eachQ);
            startButton.innerHTML = "Go to Question 2";
        }
    } else if (startButton.innerHTML == "Go to Question 2") {
        promptEl.innerHTML = questionTwo;
        for (let i = 0; i < questionTwoQs.length; i++) {
            console.log(questionTwoQs[i]);
            questionListEl.children[i].innerHTML = questionTwoQs[i];
            startButton.innerHTML = "Go to Last Question";
        }
    } else if (startButton.innerHTML == "Go to Last Question") {
        promptEl.innerHTML = questionThree;
        for (let i = 0; i <questionThreeQs.length; i++) {
            console.log(questionThreeQs[i]);
            questionListEl.children[i].innerHTML = questionThreeQs[i];
            startButton.innerHTML = "Finish";
        }
    }
    // Need to add for once finished
};

function timer() {
    var timeLeft = 31;
    var timeInteval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft + ":00";

        if (timeLeft === 0) {
            clearInterval(timeInteval);
        }
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