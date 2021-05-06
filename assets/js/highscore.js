let highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
// let scoreList = documentgetElementbyID("scoreLIst");
let clearButton = documentgetElementbyID("clearButton");

highScores.sort(function (a,b) {
    return b.score - a.score
})

for (var i=0; i <highScores.length; i++) {
    var newLi = document.createElement("li")
    newLi.textContent = highScores[i].name + "-" + highScores[i].score
    scoreList.apendChild(newLi)
}

clearButton.addEventListener("click", function () {
    localStorage.clear();
    window.location.reload();
});