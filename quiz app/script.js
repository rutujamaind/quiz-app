const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {question: "who is the father of HTML?",
        a:"Rasmus Lerdorf",
        b: "Tim Berners-Lee" ,
        c:" Brendan Eich",
        d:"Sergey Brin" ,
        correct:"b",
    },
    {question:"which of the following is used to read an HTML page and render it?",
        a:"Web server",
        b:"Web network",
        c:"Web browser",
        d:"Web matrix",
        correct:"c",
        
    },
    {  question:"which of the following CSS style property is used to specify an italic text?",
        a:"Style",
        b:"font",
        c:"font-style",
        d:"@font-face",
        correct:"c",
        
    }, 
    { question: "which of the following are the CSS Extension Prefixes for Webkit?",
        a:-"chrome",
        b:-"web",
        c:"-o-",
        d:"-webkit",
        correct:"d",
    },
    {question:"Javascript is an____________ language",
        a:"Object-Oriented",
        b:"Object-Based",
        c:"Protocol",
        d:"None of the above",
        correct:"a",
    }, 
    {question:"which of the following keywords is used to define a variable in Javascript?",
        a:"var",
        b:"let",
        c:"Both A and B",
        d:"None of the above",
        correct:"c",
},



    
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
