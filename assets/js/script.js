/* DOM Elements declaration */

const img = document.getElementById("image");
const questionsElement = document.getElementById("questions");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const quiz = [
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
            {text: "Yes", correct: true},
        ]
    },
    {
        question: "A hammer is a simple tool used in the workshop to make work easier and faster.",
        answers: [
            {text: "Yes", correct: true},
            {text: "No", correct: false},
            {text: "None", correct: false},
        ]
    },
    {
        question: "Which of the following is a spanner?",
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
            {text: "hammer", correct: false},
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