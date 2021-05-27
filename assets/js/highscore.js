var userName = document.getElementById('userName');
var userScore = document.getElementById("userScore");
var clearButton = document.getElementById("clearButton");
var StartOver = document.getElementById("newQuiz");

renderUserScore();

function renderUserScore() {
//GOAL: Create a new element, have it set both, append child.
    var userHistory = JSON.parse(localStorage.getItem('userHistory') || "[]");
    var finalscore = JSON.parse(localStorage.getItem('userHistory'));
    var finalname = userHistory.name;
    console.log(userHistory[0].name);
    console.log(userHistory[0].score);

    // userName.textContent = finalname;
    // userScore.textContent = finalscore;

    // var currentScore = document.querySelector("#scoreList");
    // var newScoreContainer = document.createElement('div');
    // var newScore = document.createTextNode(`Name: ${finalname} | Score: ${finalscore}`);
    // newScoreContainer.appendChild(newScore);
    // currentScore.appendChild(newScoreContainer);
}



clearButton.addEventListener("click", function () {
    localStorage.clear();
    window.location.reload();
});

StartOver.addEventListener("click", function (event) {
    window.location.replace("./index.html");
});


