import checkAnswer from"./modules/checkAnswer.js"
import questions from "./modules/questions.js"

const questionsElements= document.querySelector(".questions");
const button=document.querySelector("#submit");
const resultsElements = document.querySelector(".results");

console.log(questionsElements.innerHTML);
//helpeful checking that you have done what you have done
//when you changed the const name you must change it here too e.g.
//questions became question elements

console.log(button.innerHTML);
console.log(resultsElements.innerHTML);

button.addEventListener("click", checkAnswer);

function displayQuestions (){
    questions.map(createQuestionElement)
}

function createQuestionElement(question) {
    const questionElement = document.createElement("p");

    const questionText = document.createTextNode (question.questionText);

    const listofChoices = document.createElement("ol");
    
    const choice1 = document.createElement("li");
    choice1.textContent = question.choice1;

    const choice2 = document.createElement("li");
    choice2.textContent = question.choice2;

    const choice3 = document.createElement("li");
    choice3.textContent = question.choice3;

    //put the Question header in
    const questionHeader = document.createElement("h2");
    const wordQuestion = document.createTextNode("Question ");
    const questionIdSpan = document.createElement("span");
    const questionId = document.createTextNode(question.id);

    //"Question " + <span id="question_id">1</span>

    listofChoices.appendChild(choice1);
    listofChoices.appendChild(choice2);
    listofChoices.appendChild(choice3);

    questionHeader.appendChild(wordQuestion);
    questionHeader.appendChild(questionIdSpan);
    questionHeader.appendChild(questionId);

    console.log(questionsElements.innerHTML);

    //questionElement.appendChild(questionHeader);
    questionElement.appendChild(questionText);
    questionsElement.appendChild(questionElement);
    //questionsElement.appendChild(listOfChoices);

    const createInput = document.createElement("input");
    questionsElement.appendChild(createInput);
}
displayQuestions();