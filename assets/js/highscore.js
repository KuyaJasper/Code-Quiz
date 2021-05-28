var clearButton = document.getElementById("clearButton");
var StartOver = document.getElementById("newQuiz");
var scoreList = document.querySelector('#scoreList');
var userHistory = JSON.parse(localStorage.getItem('userHistory') || "[]");


userHistory.sort(function (a,b){
    return b.score - a.score
})

renderUserScore();

function renderUserScore() {

    for (var i=0; i< userHistory.length; i++){
        var newScore = document.createElement('h4');
        newScore.textContent= `Name: ${userHistory[i].name} || Score: ${userHistory[i].score}`
        scoreList.appendChild(newScore)
    }

}



clearButton.addEventListener("click", function () {
    localStorage.clear();
    window.location.reload();
});

StartOver.addEventListener("click", function (event) {
    window.location.replace("./index.html");
});


