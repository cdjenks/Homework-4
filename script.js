var startButton = document.getElementById("start-button");
var questionContainerButtons = document.getElementById("questions-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var answerResultField = document.getElementById("answer-feedback");
var savedScoresButton = document.getElementById("saved-scores")

var randomQuestions, currentQuestionIndex;

var quizGameTimer = document.getElementById("quiz-timer");
var correctAnswers = 0;
var incorrectAnswers = 0;
var secondsLeft = 90;

function quizTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    quizGameTimer.innerText = secondsLeft + " seconds remaining";

    if (secondsLeft <= 0 || randomQuestions.length <= currentQuestionIndex + 1) {
      clearInterval(timerInterval);
      enterScore();
    }
  }, 1000);
}

savedScoresButton.addEventListener("click", viewScores);
startButton.addEventListener("click", startGame);

function viewScores() {
    alert(localStorage.getItem("Scores"));
}

function startGame() {
  startButton.classList.add("hide");
  randomQuestions = quizQuestions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerButtons.classList.remove("hide");
  setNextQuestion();
  quizTimer();
}

function setNextQuestion() {
  resetState();
  showQuestion(randomQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("button");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsEl.appendChild(button);
  });
}

function resetState() {
  while (answerButtonsEl.firstChild) {
    answerButtonsEl.removeChild(answerButtonsEl.firstChild);
  }
}

function selectAnswer(e) {
  var selectedAnswer = e.target;
  var correct = selectedAnswer.dataset.correct;
  if (correct) {
    answerResultField.classList.remove("hide");
    answerResultField.innerText = "Correct!";
    correctAnswers++;
    quizStatusCheck();
  } else {
    answerResultField.classList.remove("hide");
    answerResultField.innerText = "Incorrect :(";  
    secondsLeft -= 5;
    incorrectAnswers++;
    quizStatusCheck();
  }
}

function quizStatusCheck() {
  if (randomQuestions.length > currentQuestionIndex + 1) {
    currentQuestionIndex++;
    setNextQuestion();
  } else enterScore();
}

function enterScore() {
  var userInitials = prompt(
    `Correct: ${correctAnswers}\nIncorrect: ${incorrectAnswers}\nPlease enter your initials`
  );
  var scores = getLocalScores();
  var gameResults = {Correct: correctAnswers,Incorrect: incorrectAnswers, Initials: userInitials};
  scores.push(gameResults)
  localStorage.setItem("Scores", JSON.stringify(scores))
}

function getLocalScores() {
    var storedScores = localStorage.getItem("Scores");
    if  (storedScores && storedScores[0] == "{"){
        let scoresArray = [];
        scoresArray.push(storedScores)
        return scoresArray
    } else if  (storedScores && storedScores[0] == "["){
        return JSON.parse(storedScores)
    } else {
        return []
    }
}

var quizQuestions = [
  {
      question:
        "What is 18 squared?",
        answers: [
        {text: "256", correct: false},
        {text: "92", correct: false},
        {text: "644", correct: false},
        {text: "324", correct: true},
    ],
  },
  {
      question:
        "What is 845 minus 138?",
        answers: [
        {text: "588", correct: false},
        {text: "698", correct: false},
        {text: "707", correct: true},
        {text: "714", correct: false},
      ],
  },
  {
      question: 
        "What is 4400 divided by 400?",
        answers: [
        {text: "11", correct: true},
        {text: "20", correct: false},
        {text: "22", correct: false},
        {text: "16", correct: false},
      ],
  },
  {
      question:
        "What is 22 multiplied by 4.5?",
        answers: [
        {text: "103", correct: false},
        {text: "88", correct: false},
        {text: "95", correct: false},
        {text: "99", correct: true},
      ],
  },
  {
      question:
        "What is 9 multiplied by 84?",
        answers: [
        {text: "680", correct: false},
        {text: "756", correct: true},
        {text: "556", correct: false},
        {text: "804", correct: false},
        ],
  },
  {
    question:
        "What is 720 divided by 24?",
        answers: [
        {text: "12", correct: false},
        {text: "30", correct: true},
        {text: "25", correct: false},
        {text: "39", correct: false},
        ],  
  },
  {
    question:
        "What is 18(8 - 13)?",
        answers: [
        {text: "-90", correct: true},
        {text: "-104", correct: false},
        {text: "86", correct: false},
        {text: "-62", correct: false},
        ],  
  },
  {
    question:
        "What is 7 cubed?",
        answers: [
        {text: "343", correct: true},
        {text: "291", correct: false},
        {text: "309", correct: false},
        {text: "98", correct: false},
        ],  
  },
  {
    question:
        "What percentage of 200 is 120?",
        answers: [
        {text: "55%", correct: false},
        {text: "60%", correct: true},
        {text: "74%", correct: false},
        {text: "70%", correct: false},
        ],  
  },
  {
    question:
        "What is 0.7 times 20?",
        answers: [
        {text: "9", correct: false},
        {text: "13", correct: false},
        {text: "16.2", correct: false},
        {text: "14", correct: true},
        ],  
  },
  {
    question:
        "What is 5 times 20.2?",
        answers: [
        {text: "148", correct: false},
        {text: "104", correct: false},
        {text: "110", correct: false},
        {text: "101", correct: true},
        ],  
  },
  {
    question:
        "What is the squareroot of 256?",
        answers: [
        {text: "17", correct: false},
        {text: "28", correct: false},
        {text: "16", correct: true},
        {text: "22", correct: false},
        ],  
  },
  {
    question:
        "What is 14.9 - 9.3?",
        answers: [
        {text: "5.6", correct: true},
        {text: "5.9", correct: false},
        {text: "4.7", correct: false},
        {text: "6.2", correct: false},
        ],  
  },
  {
    question:
        "What is 30(33 - 24)?",
        answers: [
        {text: "270", correct: true},
        {text: "233", correct: false},
        {text: "250", correct: false},
        {text: "310", correct: false},
        ],  
  },
  {
    question:
        "What is 583 - 457?",
        answers: [
        {text: "154", correct: false},
        {text: "126", correct: true},
        {text: "95", correct: false},
        {text: "104", correct: false},
        ],  
  },
  {
    question:
        "What is 44 + 37 + 121?",
        answers: [
        {text: "180", correct: false},
        {text: "202", correct: true},
        {text: "208", correct: false},
        {text: "188", correct: false},
        ],  
  },
  {
    question:
        "What is (50-39)(60 - 42)?",
        answers: [
        {text: "146", correct: false},
        {text: "208", correct: false},
        {text: "198", correct: true},
        {text: "213", correct: false},
        ],  
  },
  {
    question:
        "What is 4.5 times 12.2?",
        answers: [
        {text: "57", correct: false},
        {text: "54.9", correct: true},
        {text: "48.3", correct: false},
        {text: "50.7", correct: false},
        ],  
  },
];

