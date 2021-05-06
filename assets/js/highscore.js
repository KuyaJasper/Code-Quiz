var userName = document.getElementById('userName');
var userScore = document.getElementById("userScore");

renderUserScore();

function renderUserScore() {
    var finalscore = localStorage.getItem("PlayerScore");
    var finalname = localStorage.getItem("userName");
}



clearButton.addEventListener("click", function () {
    localStorage.clear();
    window.location.reload();
});