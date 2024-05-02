const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Mark Twain", "Harper Lee", "J.K. Rowling", "Charles Dickens"],
        answer: "Harper Lee"
    }
];

// Variables to track quiz progress
let currentQuestion = 0;
let score = 0;

// Function to load a question
function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');

    const currentQuizData = quizData[currentQuestion];

    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = '';

    currentQuizData.options.forEach((option, index) => {
        const optionLabel = document.createElement('label');
        optionLabel.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        optionsElement.appendChild(optionLabel);
    });

    feedbackElement.innerText = '';
}

// Function to check the answer and move to the next question
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        return;
    }

    const answer = selectedOption.value;
    const currentQuizData = quizData[currentQuestion];

    if (answer === currentQuizData.answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to display quiz result
function showResult() {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.innerText = `You scored ${score}/${quizData.length}`;
}

// Event listener for submit button
document.getElementById('submit').addEventListener('click', checkAnswer);

// Load the first question when the page loads
window.onload = loadQuestion;