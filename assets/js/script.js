//Questions for Quiz
var questions = [
  {
    //Question 1
    title: "Which of the following tags creates a button in HTML:",
    choices: ["<br>", "<footer></footer>", "<div></div>", "<button></button>"],
    answer: "<button></button>",
  },

  {
    //Question 2
    title: "Which one of these is NOT a commonly used datatype in Javascript:",
    choices: ["strings", "booleans", "beans", "numbers"],
    answer: "beans",
  },

  {
    // Question 3
    title: "Inside which HTML element do we put JavaScript into?",
    choices: ["<div>", "<javascript>", "<script>", "<js>"],
    answer: "<script>",
  },

  {
    //Question 4
    title:
      "Choose the Javascript syntax that will create a function called: CodingisEasy.",
    choices: [
      "function CodingisEasy()",
      "function:CodingisEasy()",
      "function = #CodingisEasy()",
      "function(CodingisEasy)",
    ],
    answer: "function CodingisEasy()",
  },

  {
    //Question 5
    title:
      "Which string method combines two or more strings together to create a new string?",
    choices: ["combine()", "concat()", "toLowerCase()", "length()"],
    answer: "concat()",
  },
];

// Javascript for Game itself
var score = 0;
var scoreEL = document.getElementById("gameScore");
var count = 0;
var gameTime = 30;
var timeEl = document.getElementById("gameTimer");
var title = document.getElementById("card-question");
var choiceOne = document.getElementById("choice_one");
var choiceTwo = document.getElementById("choice_two");
var choiceThree = document.getElementById("choice_three");
var choiceFour = document.getElementById("choice_four");
var currentQuestion1 = questions[count].choices[0];
var currentQuestion2 = questions[count].choices[1];
var currentQuestion3 = questions[count].choices[2];
var currentQuestion4 = questions[count].choices[3];
var submitButton = document.getElementById("submitButton");
var PlayerFinalScore = document.getElementById("PlayerFinalScore");
var startOverBtn = document.querySelector("#newQuiz");

// Checking answers for event listener which is codeded into the HTML
function checkAnswer(event) {
  scoreEL.textContent = score;
  PlayerFinalScore.textContent = score;
  console.log("your choice is:" + event.target.textContent);
  console.log("the correct answer is:" + questions[count].answer);
  // console.log(event.target.textContent === questions[count].answer)
  if (event.target.textContent === questions[count].answer) {
    score += 100;
    gameTime += 10;
  } else {
    score -= 100;
    gameTime -= 10;
  }

  count++;

  if (count == questions.length) {
    endGame();
    // set up in game function here later. reset the game, or send you to highscores HTML
  } else {
    gameQuestions();
  }
}

function gameTimer() {
  var countdown = setInterval(function () {
    timeEl.textContent = gameTime;
    gameTime--;
    if (gameTime === 0) {
      gameTimeStop(countdown);
    } else if (gameTime < 0) {
      gameTimeStop(countdown);
      timeEl.textContent = 0;
      scoreEL.textContent = score;
      endGame();
    }
  }, 1000);
}
function gameTimeStop(interval) {
  let gameTime = 0;
  timeEl.textContent = gameTime;
  clearInterval(interval);
}

function gameQuestions() {
  scoreEL.textContent = score;
  PlayerFinalScore.textContent = score;
  title.textContent = questions[count].title;
  for (var i = 0; i < 4; i++) {
    if (i === 0) {
      choiceOne.textContent = questions[count].choices[i];
    } else if (i === 1) {
      choiceTwo.textContent = questions[count].choices[i];
    } else if (i === 2) {
      choiceThree.textContent = questions[count].choices[i];
    } else {
      choiceFour.textContent = questions[count].choices[i];
    }
  }
}

function endGame() {
  PlayerFinalScore.textContent = score;
  gameTimeStop();
  document.getElementById("finalScore").classList.remove("hide");
  document.getElementById("finalScore").classList.add("show");
  document.getElementsByClassName("choices")[0].classList.remove("show");
  document.getElementsByClassName("choices")[0].classList.add("hide");
  document.getElementById("card-question").classList.add("hide");
  document.getElementById("cardScore").classList.remove("hide");
  timeEl.classList.add("hide");
  scoreEL.classList.add("hide");
}

function localStorageData() {
  var playerScore = score;
  var userName = document.querySelector("#userName").value.trim();

  var gameScore = {
      name: userName,
      score: playerScore
  };

  console.log(gameScore);

  var userHistory = JSON.parse(localStorage.getItem('userHistory') || "[]");
  //   let userHistory;
  // if (localStorage.getItem("userHistory") === null) {
  //   userHistory = [];} 
  //   else {
  //   userHistory = JSON.parse(localStorage.getItem("userHistory"));
  // }

  userHistory.push(gameScore);

  // first paramater is the key name, second paramter is the value. in local storage

  localStorage.setItem('userHistory', JSON.stringify(userHistory));
}

startQuiz.addEventListener("click", function () {
  scoreEL.textContent = score;
  timeEl.textContent = gameTime;
  gameTimer();
  gameQuestions();
  document.getElementsByClassName("choices")[0].classList.remove("hide");
  document.getElementsByClassName("choices")[0].classList.add("show");
  document.getElementsByClassName("startcard")[0].classList.add("hide");
  document.getElementById("startQuiz").classList.add("hide");
});

submitButton.addEventListener("click", function (event) {
    event.stopPropagation();
    localStorageData()
  window.location.replace("./highscores.html");
//   pageloadFunction();
});

// function pageloadFunction() {
//   let userHistory;
//   if (localStorage.getItem("History") === null) {
//     userHistory = [];} 
//     else {
//     userHistory = JSON.parse(localStorage.getItem("History"));
//   }
// }
