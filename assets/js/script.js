// GLOBAL VARIABLES
// Main Container:
const quizContainer = document.getElementById('quiz-box');
// Questions and answers
const questionEl = document.getElementById('question');
const choice1El = document.getElementById('choice1');
const choice2El = document.getElementById('choice2');
const choice3El = document.getElementById('choice3');
const choice4El = document.getElementById('choice4');
const beginBtn = document.getElementById("beginBtn");
// Other HTML elements:
let questionAnswerBoxEl = document.getElementById("questionAnswerBox");
let printScoreBoxEl = document.getElementById("printScoreBox");
let listHighScoreEl = document.getElementById("listHighScore");
let highScoreBoxEl = document.getElementById("highScoreBox");
let playBtnEl = document.getElementById("playBtn");
let introRulesBoxEl = document.getElementById("introRulesBox");
let viewHighScoreEl = document.getElementById("viewHighScore");
let timeEl = document.querySelector(".timer");
// Entering in initials
let initialsEl = document.querySelector("#initials");

// Index for first questions
let questionIndex = 0;
let choicesIndex = 0;

// Begins score at 0
let score = 0;

// sets time for timer
var secondsLeft = 60;

// Accesses score board from local storage, if it exists
let highScoreBoard = JSON.parse(localStorage.getItem("highScoreBoard")) || [];


// EVENT LISTENERS
// Starts quiz
beginBtn.addEventListener("click", startQuiz);

// Quiz answers (choices) listeners
choice1El.addEventListener("click", choiceClickHandler);
choice2El.addEventListener("click", choiceClickHandler);
choice3El.addEventListener("click", choiceClickHandler);
choice4El.addEventListener("click", choiceClickHandler);
// Starts game again

playBtnEl.addEventListener("click", playAgain);
// View high scores

viewHighScoreEl.addEventListener("click", renderScoreboard);


// Questions & Answers for the Quiz
const questions = [
    {
        quest: "What is the z- index used value for?",
        answer: "Layering elements",
        choices: [
            "Alphabetizing elements",
            "Ordering elements",
            "Calling on elements",
            "Layering elements",
        ],
    },
    {
        quest: "What does JSON stand for?",
        answer: "Javascript Object Notation",
        choices: [
            "JavaScript Over Nothing",
            "Javascript Object Notation",
            "Just Stop On Null",
            "JavaScript Object Null"
        ]
    },
    {
        quest: "Which HTML element do you put JavaScript into?",
        answer: "<script>",
        choices: [
            "<src>",
            "<js>",
            "<javascript>",
            "<script>"
        ]
    },
    {
        quest: "How do you write an IF statement for executing code: if 'i' is NOT equal to 10? ",
        answer: "if (i != 10)",
        choices: [
            "if(i 10) ",
            "if(i == !10) then",
            "if (i != 10)",
            "if i || 10"
        ]
    },
    {
        quest: "What will be the output of this code?      console.log(false == '0');  ",
        answer: "true",
        choices: [
            "true",
            "false",
            "null",
            "undefined"
        ]
    },
    {
        quest: "Which of these can be used to style a webpage?",
        answer: "Any of these",
        choices: [
            "CSS",
            "Javascript",
            "HTML",
            "Any of these"
        ]
    },
    {
        quest: "What will be the output of the following code:   let bear = ”FuzzyLittleBear” console.log(bear.charAt(4))",
        answer: "y",
        choices: [
            "z",
            "L",
            "y",
            "None of these"
        ]
    },
    {
        quest: "What is the correct syntax for declaring an array.",
        answer: "const arr=[1,2,3,4]",
        choices: [
            "const arr={1,2,3,4}",
            "const arr=[1,2,3,4]",
            "Both a and b",
            "None of these"
        ]
    }
]


// Displays questions and starts timer function
function startQuiz() {
    introRulesBoxEl.setAttribute("class", "hidden");
    questionAnswerBoxEl.setAttribute("class", "visible");
    timerDisplay();
}

// Validates choice with answer, displays result, adds points to score(createScore) or
//  subtracts from timer(wrongAnswer), and adds 1 to questionIndex and displays (showQuestion), or 
// ends game (gameOver), gives points for extra secs & create score (createScore).
function choiceClickHandler(event) {
    console.log(event);
    const resultsEl = document.getElementById('results');
    // when one of the choices are selected, then it is verfied with the correct answer, 
    if (event.target.innerText === questions[questionIndex].answer) {
        resultsEl.innerText = "Correct! +100points";
        createScore(100);
        // Add points to createScore function
    }
    else {
        resultsEl.innerText = "Wrong, -5 seconds!";
        wrongAnswer();
    }
    // subtract 5 seconds from timer 
    if (questionIndex + 1 < questions.length) {
        showQuestion(++questionIndex);
    }
    else {
        gameOver();
        createScore(secondsLeft * 2);
        secondsLeft = 0;
    }
}

// // Tallys highscore
function createScore(points) {
    score += points;
}

// Subtracts 5 seconds from timer
function wrongAnswer() {
    secondsLeft -= 5;
}

// Displays the current question
showQuestion(questionIndex);

// Displays next question
function showQuestion(index) {
    questionEl.textContent = questions[index].quest;
    choice1El.textContent = questions[index].choices[0];
    choice2El.textContent = questions[index].choices[1];
    choice3El.textContent = questions[index].choices[2];
    choice4El.textContent = questions[index].choices[3];
}

// Begins and displays timer, and stops timer and end game (gameOver) at 0.
function timerDisplay() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time Left: " + secondsLeft;
        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to tell user test is over
            gameOver();
        }
    }, 1000);
}

// Hides last question, displays entering initials, and displays score.
function gameOver() {
    var printScoreEl = document.getElementById("printScore");
    questionAnswerBoxEl.setAttribute("class", "hidden");
    printScoreBoxEl.setAttribute("class", "visible");
    timeEl.textContent = "Time Left: 0";
    printScoreEl.textContent = ("Your Score: " + score);
}

// Validates input is !null, calls on inputScore for to put score and initials in local storage.
function validateForm(event) {
    event.preventDefault();
    let initials = document.forms["initialsInput"]["initials"].value;
    if (initials == "") {
        alert("Please enter your initials.");
        return false;
    }
    inputScore(initials, score);
}

// Stores score and initials in local storage. sorts scores in local storage with high score first, 
// and calls on display highscore (renderScoreboard).
function inputScore(initials, score) {
    var userScore = {
        initials: initials,
        totalScore: score,
    };
    highScoreBoard.push(userScore);
    highScoreBoard.sort((a, b) => b.totalScore - a.totalScore);
    localStorage.setItem("highScoreBoard", JSON.stringify(highScoreBoard));
    renderScoreboard();
}

// Displays score board and hides initials entry page, limits display to 6 scores
function renderScoreboard() {
    printScoreBoxEl.setAttribute("class", "hidden");
    introRulesBoxEl.setAttribute("class", "hidden");
    highScoreBoxEl.setAttribute("class", "visible");
    while (listHighScoreEl.lastChild) {
        listHighScoreEl.removeChild(listHighScoreEl.lastChild);
    }
    for (let i = 0; i < 6 && highScoreBoard.length; i++) {
        var li = document.createElement("li");
        li.textContent = (highScoreBoard[i].totalScore + " **** " + highScoreBoard[i].initials)
        listHighScoreEl.appendChild(li);
    }
}

// Allows user to play again, sets variables back to beginning.
function playAgain() {
    highScoreBoxEl.setAttribute("class", "hidden");
    introRulesBoxEl.setAttribute("class", "visible");
    initialsEl.value = "";
    questionIndex = 0;
    secondsLeft = 60;
    score = 0;
}