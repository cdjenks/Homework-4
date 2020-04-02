var startButton = document.getElementById("start-button")
var questionContainerButtons = document.getElementById("questions-container")
var questionEl = document.getElementById("question")
var answerButtonsEl = document.getElementById("answer-buttons")
var answerResultField = document.getElementById("answer-feedback")


var randomQuestions, currentQuestionIndex



startButton.addEventListener("click", startGame)



function startGame() {
    startButton.classList.add("hide")
    randomQuestions = quizQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerButtons.classList.remove("hide")   
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestionIndex])
}



function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("button")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function resetState() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)

    }
}

function selectAnswer(e) {
    var selectedAnswer = e.target
    var correct = selectedAnswer.dataset.correct
    if (correct) {
        answerResultField.innerText = "Correct!"
        answerResultField.classList.remove("hide")
        quizStatusCheck()
    } else {
        answerResultField.innerText = "Incorrect :("
        answerResultField.classList.remove("hide")
        quizStatusCheck()
    }
}


function quizStatusCheck() {
if (randomQuestions.length > currentQuestionIndex + 1){
    currentQuestionIndex++
    setNextQuestion()
    } else 
    enterScore()
}


function enterScore() {

}



var quizQuestions = [
    {
        question: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
        answers: [
            {text: "William and Elizabeth", correct: false },
            {text: "Joseph and Catherine", correct: false },
            {text: "John and Mary", correct: true },
            {text: "George and Anne", correct: false }
        ]
    },
    {
        question: "When did the Libery Bell get its name?",
        answers: [
            {text: "When it was made, in 1701", correct: false },
            {text: "when it rang on July 4th, 1776", correct: false },
            {text: "In the 19th century, when it became a symbol of the abolition of slavery", correct: true },
            {text: "None of the above", correct: false }
        ]   
    },
    {
        question: "Which of the following items was owned by the fewest U.S. homes in 1990?",
        answers: [
            {text: "Home computer", correct: false},
            {text: "Compact disk player", correct: true},
            {text: "cordless phone", correct: false},
            {text: "Dishwasher", correct: false}
        ]
    },
    {
        question: "In 1990, in what percentage of U.s. married couples did the wife earn more money than the husband?",
        answers: [
            {text: "8", correct: false},
            {text: "18", correct: true},
            {text: "38", correct: false},
            {text: "58", correct: false}
        ]
    },
    {
        question: "During the 1980s for six consecutive years what breed of dog was the most popular in the U.S.?",
        answers: [
            {text: "Cocker spaniel", correct: true},
            {text: "German shepherd", correct: false},
            {text: "Labrador retriever", correct: false},
            {text: "Poodle", correct: false}
        ]
    },
    {
        question: "The first black American pictured on a U.S. postage stamp was who?",
        answers: [
            {text: "Frederick Douglass", correct: false},
            {text: "Booker T Washington", correct: false},
            {text: "Louis Armstrong", correct: false},
            {text: "Joe Louis", correct: true}
        ]
    }
]



//     {
//         question: "Which of the following items was owned by the fewst U.S. homes in 1990?",
//         answers: {
//             a: "home computer",
//             b: "compact disk player",
//             c: "cordless phone",
//             d: "dishwasher",
//         },
//         correctAnswer: "b"
//     },
// ]




