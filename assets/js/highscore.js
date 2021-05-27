var userName = document.getElementById('userName');
var userScore = document.getElementById("userScore");
var clearButton = document.getElementById("clearButton");
var StartOver = document.getElementById("newQuiz");

renderUserScore();

function renderUserScore() {
//GOAL: Create a new element, have it set both, append child.
    var finalscore = localStorage.getItem("PlayerScore");
    var finalname = localStorage.getItem("userName");
    // userName.textContent = finalname;
    // userScore.textContent = finalscore;
    var currentScore = document.querySelector("#scoreList");
    var newScoreContainer = document.createElement('div');
    var newScore = document.createTextNode(`Name: ${finalname} | Score: ${finalscore}`);
    newScoreContainer.appendChild(newScore);
    currentScore.appendChild(newScoreContainer);
}



clearButton.addEventListener("click", function () {
    localStorage.clear();
    window.location.reload();
});

StartOver.addEventListener("click", function (event) {
    window.location.replace("./index.html");
});


