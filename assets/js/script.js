//Questions for Quiz
var questions = [
    {//Question 1
        title: "Which of the following tags creates a button in HTML",
        choices: ["<br>", "<footer></footer>", "<div></div>", "<button></button>"],
        answer: "<button></button>"
    },

    {//Question 2
        title: "Which one of these is NOT a commonly used datatype in Javascript:",
        choices: ["strings", "booleans", "beans", "numbers"],
        answer: "beans"
    },

    {// Question 3
        title: "Inside which HTML element do we put JavaScript into?",
        choices: ["<div>", "<javascript>", "<script>", "<js>"],
        answer: "<script>"
    },

    {//Question 4
        title: "Choose the syntax that will create a function called: Codingisasy.",
        choices: ["function = CodingisEasy()", "function:CodingisEasy()", "function = #CodingisEasy()", "function(CodingisEasy)"],
        answer: "function = CodingisEasy()"
    },

    {//Question 5
        title: "Which string method combines two or more strings together to create a new string?",
        choices: ["combine()", "concat()", "toLowerCase()", "length()"],
        answer: "concat()"
    },


];

// Javascript for Game itself
var score = 0
var count = 0;
var title = document.getElementById("card-question");
var choiceOne = document.getElementById("choice_one");
var choiceTwo = document.getElementById("choice_two");
var choiceThree = document.getElementById("choice_three");
var choiceFour = document.getElementById("choice_four");
var currentQuestion1 = questions[count].choices[0];
var currentQuestion2 = questions[count].choices[1];
var currentQuestion3 = questions[count].choices[2];
var currentQuestion4 = questions[count].choices[3];


function checkAnswer(Question) {
    console.log(Question)
    console.log(questions[count].answer)
    console.log(Question === questions[count].answer)
    if (Question === questions[count].answer) {
        ++count;
        ++score;
    }
    else {
        --score;
    }
}

function gameTimer() {
  // Sets interval in variable
  var secondsLeft = 100;
  var timeEl = document.getElementById("gameTimer");
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
// 1000 mili seconds. Browser goes by milliseconds
  }, 1000);
}

startQuiz.addEventListener("click", function () {
    console.log(questions);

    gameTimer();
    console.log(document.getElementsByClassName('questions'));
    document.getElementsByClassName('choices')[0].classList.remove('hide');
    document.getElementsByClassName('choices')[0].classList.add('show');
    document.getElementsByClassName('startcard')[0].classList.add('hide');
    document.getElementById('startQuiz').classList.add('hide');

    title.textContent = questions[count].title;
    choiceOne.textContent = currentQuestion1;
    choiceTwo.textContent = currentQuestion2;
    choiceThree.textContent = currentQuestion3;
    choiceFour.textContent = currentQuestion4;

    choiceOne.addEventListener("click", function () { checkAnswer(currentQuestion1) });
    choiceTwo.addEventListener("click", function () { checkAnswer(currentQuestion2) });
    choiceThree.addEventListener("click", function () { checkAnswer(currentQuestion3) });
    choiceFour.addEventListener("click", function () { checkAnswer(currentQuestion4) });
    console.log(score);
});
