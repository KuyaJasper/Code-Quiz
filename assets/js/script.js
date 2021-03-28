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
startQuiz.addEventListener("click", function (){
    console.log (questions);
    console.log (document.getElementsByClassName('questions'));
    document.getElementsByClassName('questions')[0].classList.remove('hide');
    document.getElementsByClassName('questions')[0].classList.add('show');
    document.getElementsByClassName('startcard')[0].classList.add('hide');
    for (var i=0; i<questions.length; i++){
    document.getElementById("card-text").innerHTML = questions[i].title;
    console.log (document.getElementById("question_one"));
    document.getElementsByClassName("question_one")[0].innerHTML = questions[i].choices[0];
    document.getElementsByClassName("question_two")[0].innerHTML = questions[i].choices[1];
    document.getElementsByClassName("question_three")[0].innerHTML = questions[i].choices[2];
    document.getElementsByClassName("question_four")[0].innerHTML = questions[i].choices[3];
}});


