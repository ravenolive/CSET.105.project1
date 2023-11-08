const questions = [
    {
        question: "How old is Raven?",
        options: ["10", "23", "18", "17"],
        correctAnswer: "18",
    },
    {
        question: "How old is Luis?",
        options: ["19", "20", "7", "54"],
        correctAnswer: "19",
    },
    {
        question: "How old is Jamie?",
        options: ["34", "67","2","19"],
        correctAnswer: "19",
    },
    {
        question: "Which planet is the second closest to the sun?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Venus",
    },
    {
        question: "How much horsepower does a Porsche 911 GT3 RS have?",
        options: ["604hp", "518hp", "800hp", "410"],
        correctAnswer: "518hp",
    },
    {
        question: "How many inches are in a mile?",
        options: ["45637", "647839", "738", "63360"],
        correctAnswer: "63360",
    },
    {
        question: "What city are we in?",
        options: ["Reading", "Pittsburgh", "Lancaster", "harrisburgh"],
        correctAnswer: "Lancaster"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result-container");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

function displayQuestion(question) {
    questionText.textContent = question.question;
    optionsContainer.innerHTML = "";
    for (let i = 0; i < question.options.length; i++) {
        const option = question.options[i];
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.id = `option${i}`;
        radio.value = option;

        const label = document.createElement("label");
        label.htmlFor = `option${i}`;
        label.textContent = option;

        optionsContainer.appendChild(radio);
        optionsContainer.appendChild(label);
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;
        if (userAnswer === correctAnswer) {
            score++;
        }
        currentQuestionIndex++;
    }

    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
    } else {
        displayResult();
    }
}

function displayResult() {
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = score;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion(questions[currentQuestionIndex]);
    resultContainer.classList.add("hidden");
    submitButton.disabled = true;
}

displayQuestion(questions[currentQuestionIndex]);

document.getElementById("quiz-form").addEventListener("change", function () {
    submitButton.disabled = false;
});

document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault();
    checkAnswer();
    submitButton.disabled = true;
});

restartButton.addEventListener("click", restartQuiz);
