// selects the quiz, results and submit HTML elements 
const quizContainer = document.getElementById('quiz-box');


// Questions & Answers - answer is the index of choices

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
        quest: "What is the correct JavaScript syntax to change the content of the HTML element:   < h1 id='replace-me' > Replace this text.</h1> ",
        answer: "document.getElementById('replace - me').innerHTML = 'Hello World!' ",
        choices: [
            "#replace - me.innerHTML = 'Hello World!' ",
            "document.getElement('h1').innerHTML = 'Hello World'! ",
            "document.getElementById('replace - me').innerHTML = 'Hello World!' ",
            "document.getElementByName('h1').innerHTML = 'Hello World!' "
        ]
    },
    {
        quest: "How do you write an IF statement for executing code if 'i' is NOT equal to 10? ",
        answer: "if (i != 10) ",
        choices: [
            "if(i 10) ",
            "if(i == !10) then",
            "if (i != 10) ",
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
    }
]

// Done -- Start Quiz
const beginBtn = document.getElementById("beginBtn");
beginBtn.addEventListener("click", startQuiz);
let questionAnswerBoxEl = document.getElementById("questionAnswerBox");

function startQuiz() {
    introRulesBoxEl.setAttribute("class", "hidden");
    questionAnswerBoxEl.setAttribute("class", "visible");
    timerDisplay();
}


// BUILDING THE QUIZ.....
const questionEl = document.getElementById('question');
const choice1El = document.getElementById('choice1');
const choice2El = document.getElementById('choice2');
const choice3El = document.getElementById('choice3');
const choice4El = document.getElementById('choice4');
let questionIndex = 0;
let choicesIndex = 0;


choice1El.addEventListener("click", choiceClickHandler);
choice2El.addEventListener("click", choiceClickHandler);
choice3El.addEventListener("click", choiceClickHandler);
choice4El.addEventListener("click", choiceClickHandler);




// when any choice is clicked or next question button is clicked,  go to net question
function choiceClickHandler(event) {
    console.log(event);
    const resultsEl = document.getElementById('results');
    // when one of the choices are selected, 
    // then it is verfied with the correct answer, 
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
        createScore(secondsLeft * 5);
        secondsLeft = 0;
    }

}

showQuestion(questionIndex);

// displays next question
function showQuestion(index) {
    questionEl.textContent = questions[index].quest;
    choice1El.textContent = questions[index].choices[0];
    choice2El.textContent = questions[index].choices[1];
    choice3El.textContent = questions[index].choices[2];
    choice4El.textContent = questions[index].choices[3];
}

function wrongAnswer() {
    secondsLeft -= 5;
}

let score = 0;

// // function for creating highscore
function createScore(points) {
    score += points;
    console.log(score);
}

// TIMER
// sets time for timer
var secondsLeft = 60;

// Selects element by class
var timeEl = document.querySelector(".timer");

// timer function
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


let printScoreBoxEl = document.getElementById("printScoreBox");

function gameOver() {
    questionAnswerBoxEl.setAttribute("class", "hidden");
    printScoreBoxEl.setAttribute("class", "visible");
    var printScoreEl = document.getElementById("printScore");
    timeEl.textContent = "Time Left: 0";
    printScoreEl.textContent = ("Your Score: " + score);
}


// Entering in initials
let initialsEl = document.querySelector("#initials");


function validateForm(event) {
    event.preventDefault();
    let initials = document.forms["initialsInput"]["initials"].value;
    if (initials == "") {
        alert("Please enter your initials.");
        return false;
    }
    inputScore(initials, score);
}


let highScoreBoard = JSON.parse(localStorage.getItem("highScoreBoard")) || [];

// // function for displaying highscore
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




let listHighScoreEl = document.getElementById("listHighScore");
let highScoreBoxEl = document.getElementById("highScoreBox");

function renderScoreboard() {
    printScoreBoxEl.setAttribute("class", "hidden");
    highScoreBoxEl.setAttribute("class", "visible");

    while (listHighScoreEl.lastChild) {
        listHighScoreEl.removeChild(listHighScoreEl.lastChild);
    }
    for (let i = 0; i < 6 && highScoreBoard.length; i++) {

        var li = document.createElement("li");
        li.textContent = (`${highScoreBoard[i].totalScore} **** ${highScoreBoard[i].initials}`)
        listHighScoreEl.appendChild(li);
    }
}


// targets button on high score page, to start game again
let playBtnEl = document.getElementById("playBtn");
playBtnEl.addEventListener("click", playAgain);


let introRulesBoxEl = document.getElementById("introRulesBox");


function playAgain() {
    highScoreBoxEl.setAttribute("class", "hidden");
    introRulesBoxEl.setAttribute("class", "visible");
    initialsEl.value = "";
    questionIndex = 0;
    secondsLeft = 60;
    score = 0;
}


let viewHighScoreEl = document.getElementById("viewHighScore");
viewHighScoreEl.addEventListener("click", viewHighScores);

function viewHighScores() {
    introRulesBoxEl.setAttribute("class", "hidden");
    highScoreBoxEl.setAttribute("class", "visible");
    while (listHighScoreEl.lastChild) {
        listHighScoreEl.removeChild(listHighScoreEl.lastChild);
    }
    for (let i = 0; i < 6 && highScoreBoard.length; i++) {

        var li = document.createElement("li");
        li.textContent = (`${highScoreBoard[i].totalScore} **** ${highScoreBoard[i].initials}`)
        listHighScoreEl.appendChild(li);
    }
}