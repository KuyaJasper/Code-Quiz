const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

submitButton.addEventListener("click", function (){
    console.log ("It worked!");
})

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


