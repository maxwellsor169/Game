/* DOM Elements declaration */

const img = document.getElementById("image");
const questionsElement = document.getElementById("questions");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const questions = [
    {
        question: "What mechanical tool is used for tigthening a 13-size bolt?",
        answers: [
            {text: "screw driver", correct: false},
            {text: "13-spanner", correct: true},
            {text: "hammer", correct: false}
        ]
    },
    {
        question: "A G-clamp is a tool used in the workshop to hold components when filing or cuting.",
        answers: [
            {text: "Yes", correct: true},
            {text: "No", correct: false},
            {text: "None", correct: false}
        ]  
    },
    {
        question: "Which of the following is a tape?",
        answers: [
             {img: "[1]", correct: false},
             {img: "[2]", correct: false},
             {img: "[3]", correct: true}        
        ]
    },
    {
        question: "Pliers are simple tools used to hold electrical cables when working on an electrical component",
        answers: [
            {text: "No", correct: false},
            {text: "None", correct: false},
            {text: "Yes", correct: true}
        ]
    },
    {
        question: "A hammer is a simple tool used in the workshop to make work easier and faster.",
        answers: [
            {text: "Yes", correct: true},
            {text: "No", correct: false},
            {text: "None", correct: false}
        ]
    },
    {
        question: document.getElementById("image")[0],
        answers: [
             {img: "[1]", correct: true},
             {img: "[2]", correct: false},
             {img: "[3]", correct: false}        
        ]
    },
    {
        question: "What simple mechanical tool is used for tigthening and loosening of a screw?",
        answers: [
            {text: "screw driver", correct: true},
            {text: "13-spanner", correct: false},
            {text: "hammer", correct: false}
        ]
    },
    {
        question: "Which of the following is called hammer?",
        answers: [
             {img: "[1]", correct: false},
             {img: "[2]", correct: true},
             {img: "[3]", correct: true}        
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score =0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answersElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answersElement.firstChild){
        answersElement.removeChild(answersElement.firstChild);
    }
};

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answersElement.children).forEach(button =>{
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showscore();
    }

}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();