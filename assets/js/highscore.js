var userName = document.getElementById('userName');
var userScore = document.getElementById("userScore");
var clearButton = document.getElementById("clearButton");
var StartOver = document.getElementById("newQuiz");

renderUserScore();

function renderUserScore() {
    var finalscore = localStorage.getItem("PlayerScore");
    var finalname = localStorage.getItem("userName");
    userName.textContent = finalname;
    userScore.textContent = finalscore;
}



clearButton.addEventListener("click", function () {
    localStorage.clear();
    window.location.reload();
});

StartOver.addEventListener("click", function () {
    window.location.replace("./index.html");
});


// TO DO: re structure local storage to JSON objects????