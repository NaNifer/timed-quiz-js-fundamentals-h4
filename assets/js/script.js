// selects the quiz, results and submit HTML elements 
const quizContainer = document.getElementById('quiz-box');
const resultsEl = document.getElementById('results');



// // function for building quiz
// function buildQuiz() { }

// // DONE! function for showing the question
// function showQuestion() { }

// // function for showing the results
// function showResults() { }

// // DONE-ISH: function for timer -- need to subtract time for wrong answer
// function timerDisplay() { }

// // function for creating highscore
// function createScore() { }

// // function for displaying highscore
// function highScorer() { }

// // function for message after timer is up
// sendMessageTimeOver() { }

// on submit, show results
// submitButton.addEventListener('click', showResults);





// Questions & Answers - answer is the index of choices

const questions = [
    {
        quest: "What is the z- index used value for?",
        // ??? Not sure if this should be 0, or false, or empty string?
        questCode: false,
        answer: 3,
        choices: [
            "Alphabetizing elements",
            "Ordering elements",
            "Making Manny Happy",
            "Layering elements",
        ],
    },
    {
        quest: "What does JSON stand for?",
        questCode: false,
        answer: 1,
        choices: [
            "JavaScript Over Nothing",
            "Javascript Object Notation",
            "Just Stop On Null",
            "JavaScript Object Null"
        ]
    },
    {
        quest: "What is the correct JavaScript syntax to change the content of the HTML element below:",
        questCode: "< h1 id='replace-me' > Replace this text.</h1> ",
        answer: 2,
        choices: [
            "#replace - me.innerHTML = 'Hello World!' ",
            "document.getElement('h1').innerHTML = 'Hello World'! ",
            "document.getElementById('replace - me').innerHTML = 'Hello World!' ",
            "document.getElementByName('h1').innerHTML = 'Hello World!' "
        ]
    },
    {
        quest: "How do you write an IF statement for executing code if 'i' is NOT equal to 10? ",
        questCode: false,
        answer: 2,
        choices: [
            "if(i 10) ",
            "if(i == !10) then",
            "if (i != 10) ",
            "if i || 10"
        ]
    },
    {
        quest: "What will be the output of this code?",
        questCode: "console.log(false == '0'); ",
        answer: 0,
        choices: [
            "true",
            "false",
            "null",
            "undefined"
        ]
    }
]


// Done -- Start Quiz
const beginBtn = document.getElementById("beginBtn");
beginBtn.addEventListener("click", startQuiz);
let questionAnswerBoxEl = document.getElementById("questionAnswerBox");

function startQuiz() {
    let introRulesBoxEl = document.getElementById("introRulesBox");
    introRulesBoxEl.setAttribute("class", "hidden");
    questionAnswerBoxEl.setAttribute("class", "visible");
    timerDisplay();
}


// BUILDING THE QUIZ.....
const questionEl = document.getElementById('question');
const questionCodeEl = document.getElementById('questionCode');
const choice1El = document.getElementById('choice1');
const choice2El = document.getElementById('choice2');
const choice3El = document.getElementById('choice3');
const choice4El = document.getElementById('choice4');
let questionIndex = 0;
let choicesIndex = 0;
const skipQuestBtn = document.getElementById("skipQuestBtn");


choice1El.addEventListener("click", choiceClickHandler);
choice2El.addEventListener("click", choiceClickHandler);
choice3El.addEventListener("click", choiceClickHandler);
choice4El.addEventListener("click", choiceClickHandler);
skipQuestBtn.addEventListener("click", choiceClickHandler);



// when any choice is clicked or next question button is clicked,  go to net question
function choiceClickHandler(event) {
    if (questionIndex + 1 < questions.length)
        showQuestion(++questionIndex);
}

// displays next question
function showQuestion(index) {
    questionEl.textContent = questions[index].quest;
    choice1El.textContent = questions[index].choices[0];
    choice2El.textContent = questions[index].choices[1];
    choice3El.textContent = questions[index].choices[2];
    choice4El.textContent = questions[index].choices[3];
    if (questionCodeEl) {
        questionCodeEl.textContent = questions[index].questCode;
    };

}

showQuestion(questionIndex);
// if any choice is clicked display result 



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

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to tell user test is over
            // sendMessageTimeOver();
        }
    }, 1000);
}

