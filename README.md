# Project Name - Timed Quiz on JS Fundamentals

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
Timed QUiz on JS Fundamentals is a timed coding quiz with multiple-choice questions. 

 If a question is answered wrong, 5 seconds is deducted from the timer. If the question is answered correctly, will add 100 points to the score. For each second left on the clock, the user receives 2 extra points. When game is over, the user enters their initials to the high scorer board.

### The challenge
Timed QUiz on JS Fundamentals app runs in the browser, and features dynamically updated HTML and CSS powered by JavaScript. It should have a clean, polished, and responsive user interface.

### User Story

AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

### Acceptance Criteria

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

This was quite the challenge for a newbie to javascript and coding in general! It seemed like a very complicated challenge, so this is how I approached the problem:

I set up the HTML bones, and added a little bit of CSS so that I would remember to add classes and ids to my HTML. I decided to put all of the page change elements in as HTML, as I was just learning on how to change content dynamically, and this seemed a quick solution, rather than adding HTML via javascript.

For the javascript, I broke down each individual task into its own function. This helped me better understand the order of operations within the script, when functions called upon other functions. When I finally got everything working throughout all the paths, I refactored the code and added comments. Luckily, I didn't find too much duplicate code, so I think I'm getting better at this -- ha!

Finally, I went back in and added some more CSS so that it would look nicer. I only learned about Bootstrp after I started on my code, so sadly I could not include it this time around. I plan on revisiting this project so that it looks more professional.

### Built with

- Semantic HTML5 markup
- CSS
- Javascript

### What I learned

Throughout this project, I seemed to be continually vexxed by the concept of how arguments work in funtions. That the type of data tht you put into the function in one part of the script, needs to be the same kind, however can have a differnt name. However whatever argument that you want to use, basically becomes a variable in that local function. 

Here's a code snippets that displays the concept that I was having trouble with:

```js
showQuestion(questionIndex);

function showQuestion(index) {
    questionEl.textContent = questions[index].quest;
    choice1El.textContent = questions[index].choices[0];
    choice2El.textContent = questions[index].choices[1];
    choice3El.textContent = questions[index].choices[2];
    choice4El.textContent = questions[index].choices[3];
}
```

### Continued development

JS functions and arguments are becoming more clear to me, however I need to continue to practice to solidify my knowlwedge, and learn more about the different ways arguments can be used in a function.


## Author
- GitHub - [NiferK](https://github.com/NiferK)
- Portfolio - [Nifer Kilakila](https://niferk.github.io/Nifer-Kilakila-Portfolio-h2/)

## Acknowledgments

Nolan Spence and I collaboratd on creating the questions for the quiz, and for helping talk through logic. Thanks to my studybuddies Angie, Ivy, and Asha, for the support and great collaborative spirit.Huge shout out to [nullaus](https://github.com/nullaus) who was my quick dial on all the questions about JS, and talked through with me about my logic.
