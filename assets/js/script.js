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
var gameTime = 100;
var title = document.getElementById("card-question");
var choiceOne = document.getElementById("choice_one");
var choiceTwo = document.getElementById("choice_two");
var choiceThree = document.getElementById("choice_three");
var choiceFour = document.getElementById("choice_four");
var currentQuestion1 = questions[count].choices[0];
var currentQuestion2 = questions[count].choices[1];
var currentQuestion3 = questions[count].choices[2];
var currentQuestion4 = questions[count].choices[3];


// Checking answers for event listener which is codeded into the HTML
function checkAnswer(event) {
    console.log(event.target.textContent)
    console.log(questions[count].answer)
    console.log(event.target.textContent === questions[count].answer)
    if (event.target.textContent === questions[count].answer) {
        score++;
    }
    else {
        score--;
        gameTime-= 10;
    }

    count++;

    if (count == questions.length) {
        alert("Game Over")
        // set up in game function here later.
    }else {
        gameQuestions();
    }
}

function gameTimer() {
  // Sets interval in variable
  var timeEl = document.getElementById("gameTimer");
  var timerInterval = setInterval(function() {
    gameTime--;
    timeEl.textContent = gameTime;

    if(gameTime === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
// 1000 mili seconds. Browser goes by milliseconds
  }, 1000);
}

function gameQuestions (){
    title.textContent = questions[count].title;
    for (var i = 0; i<4; i++){
        if(i === 0){
    choiceOne.textContent = questions[count].choices[i];
        }else if(i === 1){
            choiceTwo.textContent = questions[count].choices[i];
        }else if (i=== 2){
            choiceThree.textContent = questions[count].choices[i];
        }else {
            choiceFour.textContent = questions[count].choices[i];
        }
    }
    
}

startQuiz.addEventListener("click", function () {
    gameTimer();
    console.log(questions);
    console.log(document.getElementsByClassName('questions'));
    document.getElementsByClassName('choices')[0].classList.remove('hide');
    document.getElementsByClassName('choices')[0].classList.add('show');
    document.getElementsByClassName('startcard')[0].classList.add('hide');
    document.getElementById('startQuiz').classList.add('hide');

gameQuestions();

    // choiceOne.addEventListener("click", function () { checkAnswer() });
    // choiceTwo.addEventListener("click", function () { checkAnswer() });
    // choiceThree.addEventListener("click", function () { checkAnswer() });
    // choiceFour.addEventListener("click", function () { checkAnswer() });
    console.log(score);
});
