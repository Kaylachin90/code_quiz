var timeEl = document.querySelector(".time");
var questionPortion = document.querySelector(".questionPortion")
var startButton =document.getElementById("start")
var Q = 0

var secondsLeft = 75;
var questions = [
    {
        text: "What does JSON stand for?",
        choices: ["Java Script Object Notation", "Java Script Other Notation", "Java Script Object Negotiation", "Joint Script Objection Notation" ],
        answer: "Java Script Object Notation"
    },
    {
        text: "What does JSON stand for 2?",
        choices: ["Java Script Object Notation", "Java Script Other Notation", "Java Script Object Negotiation", "Joint Script Objection Notation" ],
        answer: "Java Script Object Notation"
    },
    {
        text: "What does JSON stand for 3?",
        choices: ["Java Script Object Notation", "Java Script Other Notation", "Java Script Object Negotiation", "Joint Script Objection Notation" ],
        answer: "Java Script Object Notation"
    },
]
function setTime () {
    var timerInterval = setInterval (function() {
        secondsLeft--;
        timeEl.textContent = "Time Left: " + secondsLeft
    
        if(secondsLeft ===0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

setTime();

function askQuestions(){
    document.getElementById("question").textContent = questions[Q].text
    document.getElementById("answerList").innerHTML = ""
    questions[Q].choices.forEach(function (choice){
        var li = document.createElement("li")
        li.setAttribute("class", "choice-item")
        li.setAttribute("data-choice", choice)
        li.textContent = choice 
        li.onclick = function(event) {
            var clickedLink = this.getAttribute("data-choice")
           
            if (clickedLink === questions[Q].answer) {
                console.log("Correct")
            } else {
                console.log("Wrong")
            }

        Q++;
        if (Q === questions.length) {
            questionPortion.innerHTML = ""
        } else {
            askQuestions()
        }
       

        }
        document.getElementById("answerList").appendChild(li)
    })
}

startButton.addEventListener("click", function(){
    document.getElementById("start-screen").classList.add("hide")
    questionPortion.classList.remove("hide")
    askQuestions()
})

// questionPortion.addEventListener("click", function() {

//     for(let i = 0; i <= questionPortion.length - 1; i++) {
        
//     }
// }
// )