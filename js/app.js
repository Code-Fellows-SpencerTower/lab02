'use strict';

// let expr = prompt("Choose a fruit, oranges, mangoes, or papayas");
// let exprReg = expr.toLowerCase();

// switch (exprReg) {
//     case 'oranges':
//         console.log('Oranges are $0.59 a pound');
//         break;
//     case 'mangoes':
//         console.log('Got Mangoes');
//         break;
//     case 'papayas':
//         console.log('Papayas are 2.79 a pound');
//         break;
//     default:
//         console.log('Sorry, we are out of ' + expr + '.');
// }

let username;
let count = 0;

function userName() {
    username = prompt("What is your name?");   
    // console.log(username + "! Welcome to the site!"); 

    alert("Hello " + username + ", welcome to my site.");

    document.querySelector("h1").textContent = `Nice to meet you ${username}, hope you get to know me a bit better!`
}


function colorAnswer() {
    let userAnswer = prompt("Is Daniel's favorite color blue?","please type either 'yes' or 'no'") 
    let answerColor = userAnswer.toLowerCase();
    document.querySelector("#color").textContent = `His favorite color is actually blue!`;

    if(answerColor === "yes") {
        alert("nice.");
        document.getElementById('inc').value = ++count;
        console.log(count);
        // console.log("nice, his favorite color IS blue!");
    }
    else {
        alert("you tried..");
        console.log(count);
        // console.log("feels bad, you'll get the next one.");
    }
}


function dogAnswer() {
    let userAnswer = prompt("Is Daniel's dog named Bleu?","please type either 'yes' or 'no'");
    let answerDog = userAnswer.toLowerCase();
    document.querySelector("#dog").textContent = "His dog's name is Clark.";

    if(answerDog === "no") {
        alert("good stuff, his dog's name is Clark.");
        document.getElementById('inc').value = ++count;
        console.log(count);
        // console.log("good stuff, his dog's name is Clark");
    }
    else {
        alert("you tried..");
        console.log(count);
        // console.log("feels bad, you'll get the next one.");
    }
}



function catAnswer() {
    let userAnswer = prompt("Is Daniel's cat named Archie?","please type either 'yes' or 'no'"); 
    let answerCat = userAnswer.toLowerCase();
    document.querySelector("#cat").textContent = "His cat's name is Archie.";

    if(answerCat === "yes") {
        alert("good stuff, his cat's name is Archie.");
        document.getElementById('inc').value = ++count;
        console.log(count);
        // console.log("good stuff, his cat's name is Archie");
    }
    else {
        alert("you tried..");
        console.log(count);
        // console.log("feels bad, you'll get the next one.");
    }
}


function carAnswer() {
    let userAnswer = prompt("Is Daniel's car a Tacoma?","please type either 'yes' or 'no'"); 
    let answerCar = userAnswer.toLowerCase();
    document.querySelector("#car").textContent = "He drives a Tacoma, and he will not shut up about it!";

    if(answerCar === "yes") {
        alert("good stuff, his car is a Tacoma, and he will not shut up about it!");
        document.getElementById('inc').value = ++count;
        console.log(count);
        // console.log("good stuff, his car is a Tacoma, and he will not shut up about it!");
    }
    else {
        alert("you tried..");
        console.log(count);
        // console.log("feels bad, you'll get the next one.");
    }
}


function foodAnswer() {
    let userAnswer = prompt("Is Daniel's favorite food pizza?","please type either 'yes' or 'no'"); 
    let answerFood = userAnswer.toLowerCase();
    document.querySelector("#food").textContent = `His favorite food is actually burritos, yes plural!`;

    if(answerFood === "no") {
        alert("Very nice, his favorite food is actually burritos, yes plural!");
        document.getElementById('inc').value = ++count;
        console.log(count);
        // console.log("good stuff, his favorite food is actually burritos, yes plural. Thank you for playing " + username + "!");
    }
    else {
        alert("you tried.. but have a good day " + username + "!");
        console.log(count);
        // console.log("feels bad, but have a good day " + username + "!");
    }
}

function correctAnswer() {
    document.getElementById('inc').textContent = `You answered ${count}/5 right, thanks for playing ${username}!`
}