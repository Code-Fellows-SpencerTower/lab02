'use strict';

let username;
let count = 0;
let i;
let answerChoices = [`yes`, `no`]
let questions = [`Is Daniel's favorite color blue?`,`Is Daniel's dog named Bleu?`,`Is Daniel's cat named Archie?`,`Is Daniel's car a Tacoma?`, `Is Daniel's favorite food pizza?`]

let correctAnswer = [`yes`, `no`, `yes`, `yes`, `no`]

let correctAnswersWritten = [`His favorite color is actually blue!`, `His dog's name is Clark.`, `His cat's name is Archie.`, `He drives a Tacoma, and he will not shut up about it!`, `His favorite food is actually burritos, yes plural!`]

let correctAnswersId = [`#color`,`#dog`,`#cat`,`#car`,`#food`]

let wrongAnswer = "you tried.."

function userName() {
    username = prompt("What is your name?");   
    // console.log(username + "! Welcome to the site!"); 

    alert("Hello " + username + ", welcome to my site.");

    document.querySelector("h1").textContent = `Nice to meet you ${username}, hope you get to know me a bit better!`
}
// userName();

function allAnswer() {
    for(i = 0; i < questions.length; i++) {

    let userAnswer = prompt(questions[i]) 
    let answerLowerCase = userAnswer.toLowerCase();

    document.querySelector(correctAnswersId[i]).textContent = correctAnswersWritten[i];

    if(answerLowerCase === correctAnswer[i]) {
        alert("nice.");
        document.getElementById('inc').value = ++count;
        console.log(count);
        // console.log("nice, his favorite color IS blue!");
    } else {
        alert("you tried..");
        console.log(count);
        // console.log("feels bad, you'll get the next one.");
    }
}

function correctAnswerCount() {
    document.getElementById('inc').textContent = `You answered ${count}/5 right, thanks for playing ${username}!`
}

// correctAnswerCount();

// let button = document.querySelector('btn');

// button.addEventListener ('click', allAnswer());

// function colorAnswer() {
//     let userAnswer = prompt(`Is Daniel's favorite color blue?`, `please type either 'yes' or 'no'`) 
//     let answerColor = userAnswer.toLowerCase();
//     document.querySelector("#color").textContent = `His favorite color is actually blue!`;

//     if(answerColor === "yes") {
//         alert("nice.");
//         document.getElementById('inc').value = ++count;
//         console.log(count);
//         // console.log("nice, his favorite color IS blue!");
//     } else {
//         alert("you tried..");
//         console.log(count);
//         // console.log("feels bad, you'll get the next one.");
//     }
// }

// function dogAnswer() {
//     let userAnswer = prompt(`Is Daniel's dog named Bleu?`, `please type either 'yes' or 'no'`);
//     let answerDog = userAnswer.toLowerCase();
//     document.querySelector("#dog").textContent = `His dog's name is Clark.`;

//     if(answerDog === "no") {
//         alert("good stuff, his dog's name is Clark.");
//         document.getElementById('inc').value = ++count;
//         console.log(count);
//         // console.log("good stuff, his dog's name is Clark");
//     } else {
//         alert("you tried..");
//         console.log(count);
//         // console.log("feels bad, you'll get the next one.");
//     }
// }

// function catAnswer() {
//     let userAnswer = prompt(`Is Daniel's cat named Archie?`, `please type either 'yes' or 'no'`); 
//     let answerCat = userAnswer.toLowerCase();
//     document.querySelector("#cat").textContent = `His cat's name is Archie.`;

//     if(answerCat === "yes") {
//         alert("good stuff, his cat's name is Archie.");
//         document.getElementById('inc').value = ++count;
//         console.log(count);
//         // console.log("good stuff, his cat's name is Archie");
//     } else {
//         alert("you tried..");
//         console.log(count);
//         // console.log("feels bad, you'll get the next one.");
//     }
// }


// function carAnswer() {
//     let userAnswer = prompt(`Is Daniel's car a Tacoma?`, `please type either 'yes' or 'no'`); 
//     let answerCar = userAnswer.toLowerCase();
//     document.querySelector("#car").textContent = `He drives a Tacoma, and he will not shut up about it!`;

//     if(answerCar === "yes") {
//         alert("good stuff, his car is a Tacoma, and he will not shut up about it!");
//         document.getElementById('inc').value = ++count;
//         console.log(count);
//         // console.log("good stuff, his car is a Tacoma, and he will not shut up about it!");
//     } else {
//         alert("you tried..");
//         console.log(count);
//         // console.log("feels bad, you'll get the next one.");
//     }
// }


// function foodAnswer() {
//     let userAnswer = prompt(`Is Daniel's favorite food pizza?`, `please type either 'yes' or 'no'`); 
//     let answerFood = userAnswer.toLowerCase();
//     document.querySelector("#food").textContent = `His favorite food is actually burritos, yes plural!`;

//     if(answerFood === "no") {
//         alert("Very nice, his favorite food is actually burritos, yes plural!");
//         document.getElementById('inc').value = ++count;
//         console.log(count);
//         // console.log("good stuff, his favorite food is actually burritos, yes plural. Thank you for playing " + username + "!");
//     } else {
//         alert("you tried.. but have a good day " + username + "!");
//         console.log(count);
//         // console.log("feels bad, but have a good day " + username + "!");
//     }
// }

// function yearAnswer() {
//     let userAnswer = prompt("Please guess the number of years Daniel has been married."); 
//     let answerYear = ;
//     document.querySelector("#food").textContent = `His favorite food is actually burritos, yes plural!`;

//     if(answerYear === "no") {
//         alert("Very nice, his favorite food is actually burritos, yes plural!");
//         document.getElementById('inc').value = ++count;
//         console.log(count);
//         // console.log("good stuff, his favorite food is actually burritos, yes plural. Thank you for playing " + username + "!");
//     }
//     else {
//         alert("you tried.. but have a good day " + username + "!");
//         console.log(count);
//         // console.log("feels bad, but have a good day " + username + "!");
//     }
// }

// function guess() {
//     userName();
//     colorAnswer();
//     dogAnswer();
//     catAnswer();
//     carAnswer();
//     foodAnswer();

}