// selects the quiz, results and submit HTML elements 
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');


// // function for building quiz
// function buildQuiz() { }
// // function for showing the results
// function showResults() { }
// // function for timer
// function timerDisplay() { }
// // function for highscore
// function highScorer() { }
// // function for message after timer is up
// sendMessageTimeOver() { }


// display quiz right away
// buildQuiz();

// on submit, show results
// submitButton.addEventListener('click', showResults);



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
            sendMessageTimeOver();
        }
    }, 1000);
}

console.log(timerDisplay());