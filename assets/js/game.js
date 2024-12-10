/** 
 * Code below was written from a tutorial guide on https://www.youtube.com/watch?v=PBcqGxrr9g8&t=179s
 *  DOM Elements declaration */

const game_Element = document.querySelector(".game");
const timeCount = game_Element.querySelector(".timer .timer_sec");

const questionsElement = document.getElementById("questions");  // this call the global Dom element
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

// the quiz questions in a form of an array
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
        question: '<img id="img1" src="assets/images/tape.webp" alt="tape">',
        answers: [
             {text: "This is a tape measure", correct: true},
             {text: "This is a grip plier", correct: false},
             {text: "This is a spanner", correct: false}        
        ]
    },
    {
        question: "A Plier is a simple tool used to hold electrical cables when working on an electrical component",
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
        question: '<img id="img1" src="assets/images/adjustable.jpg" alt="adjustable">',
        answers: [
             {text: "A set of screw drivers", correct: false},
             {text: "This is a set of adjustable spanners", correct: true},
             {text: "A set", correct: false}        
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
        question: '<img id="img1" src="assets/images/hammer.webp" alt="hammer">',
        answers: [
             {text: "This is a set of pencils", correct: false},
             {text: "This is a set of hammers", correct: true},
             {text: "These are not tools", correct: false}        
        ]
    },
    {
        question: "Allen key is a special type of tool used in loosening and tigthening of allen bolts",
        answers: [
            {text: "Yes", correct: true},
            {text: "None", correct: false},
            {text: "No", correct: false}
        ] 
    },
    {
        question: "To tigthen a bolt, you turn the spanner in a clockwise direction",
        answers: [
            {text: "None", correct: false},
            {text: "Yes", correct: true},
            {text: "No", correct: false}
        ] 
    }
];

/**
 * Quiz functions and variables declared and assigned recpective commands to make the quiz page navigation easy
 */
let currentQuestionIndex = 0;
let score = 0;
let counter;
let timeValue = 15;


function startQuiz() {   //this function will initiate the quiz to start
    startTimer(15);
    
   
    currentQuestionIndex = 0;
    score =0;
    
    nextButton.innerHTML = "Next";
    showQuestion();
    

    
    clearInterval(counter);
    startTimer(timeValue);
    
}

function showQuestion() {        //this function will display the questions when the next button is clicked
    resetState();
   
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    
    
    questionsElement.innerHTML = questionNo + "." + currentQuestion.question;
    
    
    currentQuestion.answers.forEach(answer => {    //this function controls the answers and signal with colors if correct or not
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

function resetState(){     // this function disable the other answer buttons when an answer is selected 
    nextButton.style.display = "none";
    while(answersElement.firstChild){
        answersElement.removeChild(answersElement.firstChild);
    }
    clearInterval(counter);
}

function selectAnswer(e){     // this function helps to declare that an answer selected is correct or not
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
    });
    nextButton.style.display = "block";
    clearInterval(counter);
}

function showScore(){   // this function helps to declare the final score at the end of the quiz
    resetState();
    questionsElement.innerHTML = `Well done for getting this far, Your score is ${score} out of ${questions.length}!`;
    
    nextButton.style.display = "block";
    
    nextButton.innerHTML = "Play Again";
    clearInterval(counter);
}

/**
 * the following code was written under the guide and inspiration of a tutorial video (https://www.youtube.com/watch?v=WUBhpSRS_fk&t=2469s)
 * all the code for the timer was written with a guide from the above video url
 * this is for the next button to move to next question when handled or start the quiz again when all questions are answered
 */
function handleNextButton(){   
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        startTimer(timeValue);
    }else{
        showScore();
    }

}

nextButton.addEventListener("click", ()=>{
    clearInterval(counter);
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } 
    else {
        startQuiz();
    } 
});



function startTimer(time){     // this function will start the timer

    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;       
     }   
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            handleNextButton();
    } }
}

startQuiz();
