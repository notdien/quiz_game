"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answerQuestion = void 0;
class Question {
    // constructor
    constructor(question, choices, correctAnswer) {
        this.question = question;
        this.choices = choices;
        this.correctAnswer = correctAnswer;
    }
    // method
    displayQuestion() {
        return (`Question: ${this.question} \n Choices: ${this.choices}`);
    }
}
class Answer {
    constructor(selectedChoice) {
        this.selectedChoice = "";
    }
}
const poolOfQuestions = [
    {
        question: new Question("What is the capital of France?", ["Berlin", "London", "Paris", "Madrid"], "Paris"),
        answer: new Answer("")
    },
    {
        question: new Question("How many Infinity Stones are there?", ["3", "5", "6", "10"], "6"),
        answer: new Answer("")
    },
    {
        question: new Question("What 90s boy band member bought Myspace in 2011?", ["Nick Lachey", "Justin Timberlake", "Shawn Stockman", "Aj McLean"], "Justin Timberlake"),
        answer: new Answer("")
    },
    {
        question: new Question("What is the most visited tourist attraction in the world?", ["Eiffel Tower", "Statue of Liberty", "Great Wall of China", "Colosseum"], "Eiffel Tower"),
        answer: new Answer("")
    },
    {
        question: new Question("Which of these EU countries does not use the euro as its currency?", ["Poland", "Denmark", "Sweden", "All of the Above"], "All of the Above"),
        answer: new Answer("")
    },
    {
        question: new Question("What type of food holds the world record for being the most stolen around the globe?", ["Wagyu beef", "Cheese", "Coffee", "Chocolate"], "Cheese"),
        answer: new Answer("")
    },
    {
        question: new Question("What element does the chemical symbol AU stand for?", ["Silver", "Magnesium", "Salt", "Gold"], "Gold"),
        answer: new Answer("")
    },
    {
        question: new Question("What river passes through New Orleans, Louisiana?", ["Orleans River", "Mississippi River", "Atchafalaya River", "Colorado River"], "Mississippi River"),
        answer: new Answer("")
    },
    {
        question: new Question("In what country do more than half of the people believe in elves?", ["Norway", "Russia", "Holland", "Iceland"], "Iceland"),
        answer: new Answer("")
    },
    {
        question: new Question("What color dresses do Chinese women traditionally wear on their wedding day?", ["Blue", "Gold", "White", "Red"], "Red"),
        answer: new Answer("")
    }
];
// functions
// ask a random question
function askQuestion() {
    const randomQuestion = Math.floor(Math.random() * poolOfQuestions.length);
    const selectedQuestion = poolOfQuestions[randomQuestion].question.question;
    const answerChoices = poolOfQuestions[randomQuestion].question.choices;
    const correctAnswer = poolOfQuestions[randomQuestion].question.correctAnswer;
    const questionAndChoices = {
        question: selectedQuestion,
        choices: answerChoices,
        correct: correctAnswer
    };
    // console.log(questionAndChoices)
    return (questionAndChoices);
}
function answerQuestion() {
    const questionAndChoices = askQuestion();
    console.log(questionAndChoices.question);
    questionAndChoices.choices.forEach((choice, index) => {
        console.log(`${index + 1}. ${choice}`);
    });
    // const userAnswer = "Gold"
    // const correctAnswer = questionAndChoices.correct;
    // if (userAnswer === correctAnswer) {
    //     console.log("Correct!");
    //     return true
    // } else {
    //     console.log(`Incorrect. The correct answer is ${correctAnswer}!`)
    //     return false
    // }
}
exports.answerQuestion = answerQuestion;
