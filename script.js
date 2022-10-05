// DEPENDENCIES
var startButton = document.getElementById("start-button");
var timerEl = document.getElementById("timer");
var promptEl = document.getElementById("prompt");
var questionListEl = document.getElementById("question-list");
var qListChildEl = questionListEl.getElementsByTagName("li");
var scoreEl = document.getElementById("scoreboard");
var formEl = document.querySelector("form");
var initialInput = document.querySelector("#initials");

// DATA
    // Win-Lose status and trackers
var wins = 0;
var losses = 0;
var isWin = false;
var selected = "";
var answer = "";

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

var answers = ["Function", "var", "Determinations"];

    // Initially empty list of quiz takers and their scores
var highscore = {
    "initial": "",
    "score": ""
}

var highscoreTotal = [];

// FUNCTIONS
    // When "start" button is clicked, quiz and timer starts
startButton.addEventListener("click", function() {
    if (startButton.innerHTML === "Finish") {
        endGame();
    } else {
        gameStart();
    }
});

function gameStart() {
    if (startButton.innerHTML == "Start") {
        promptEl.innerHTML = questionOne;
        for (let i = 0; i < questionOneQs.length; i++) {
            console.log(questionOneQs[i]);
            var eachQ = document.createElement("li");
            eachQ.innerHTML = questionOneQs[i];
            questionListEl.appendChild(eachQ);
        }
        startButton.innerHTML = "Go to Question 2";
        startButton.removeAttribute("onclick");
    } else if (startButton.innerHTML == "Go to Question 2") {
        promptEl.innerHTML = questionTwo;
        for (let i = 0; i < questionTwoQs.length; i++) {
            console.log(questionTwoQs[i]);
            questionListEl.children[i].innerHTML = questionTwoQs[i];
            questionListEl.children[i].style.backgroundColor = "var(--button-color)";
        }
        startButton.innerHTML = "Go to Last Question";
    } else if (startButton.innerHTML == "Go to Last Question") {
        promptEl.innerHTML = questionThree;
        for (let i = 0; i <questionThreeQs.length; i++) {
            console.log(questionThreeQs[i]);
            questionListEl.children[i].innerHTML = questionThreeQs[i];
            questionListEl.children[i].style.backgroundColor = "var(--button-color)";
        }
        startButton.innerHTML = "Finish";
    }
    // Need to show highscore page once done with quiz
};
var timeLeft = 61;

function timer() {
    var timeInteval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds remaining";

        if (timeLeft <= 10) {
            timerEl.style.color = "var(--wrong-button)";
        }
        if (timeLeft === 0) {
            clearInterval(timeInteval);
            endGame();
        }
    }, 1000);
};
    // Determine whether answer selected is right or wrong
        // If right, move on to next question
        // If wrong, highlight red and deduct time from timer

questionListEl.addEventListener("click", function() {
    checkAnswer();
});

function checkAnswer() {
    startButton.disabled = true;
    if (answers.includes(event.target.innerHTML)) {
        event.target.style.backgroundColor = "var(--button-color-2)";
        console.log(event.target.innerHTML + " is correct");
        isWin = true;
        startButton.disabled = false;
    } else {
        event.target.style.backgroundColor = "var(--wrong-button)";
        console.log(event.target.innerHTML + " is incorrect");
        isWin = false;
        startButton.disabled = true;
        timeLeft -= 5;
    }
};



function endGame() {
    event.preventDefault();
    timerEl.innerHTML = "";
    console.log("End game");
    promptEl.innerHTML = "You've reached the end of this quiz. How did you do? <br> " +
    "Enter your initials to see your score:";
    
    questionListEl.remove();
    startButton.style.visibility = "hidden";
    formEl.style.visibility = "visible";
};

// Log score
formEl.addEventListener("submit", function() {
    event.preventDefault();
    highscore["initial"] = initialInput.value;
    highscore["score"] = timeLeft;
    highscoreTotal.push(highscore);
    localStorage.setItem("highscore", JSON.stringify(highscore));
    localStorage.setItem("highscoreTotal", JSON.stringify(highscoreTotal));

    console.log(highscore);
    console.log(JSON.parse(localStorage.getItem("highscore")));
    console.log(highscoreTotal);
});

// High score page
// scoreEl.addEventListener("click", function() {
//     scoreEl.style.color = "blueviolet";
//     promptEl.innerHTML = "High Scores:";
//     for (let i = 0; i < highscore.length; i++) {
//         var hs = document.createElement("li");
//         hs.innerHTML = highscore[i];
//         promptEl.appendChild(hs);
//     }
// });

    // When user inputs initials, add to list of finished quizzes
        // Order the list based on score/time

// USER INTERACTIONS
    // User clicks "start" to start the quiz and timer
    // User clicks button to choose their answer
    // User clicks highscore link to display scoreboard
    // User presses keys to input initials for score

// INITIALIZATION