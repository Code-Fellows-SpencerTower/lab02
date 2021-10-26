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
function userName() {
    let username = prompt("What is your name?");   
    console.log(username + "! Welcome to the site!"); 

    alert("Hello " + username + ", welcome to my site.")
}


function colorAnswer() {
    let userAnswer = prompt("Is Daniel's favorite color blue?") 
    let answerColor = userAnswer.toLowerCase();

    if(answerColor === "yes") {
        alert("nice.");
        console.log("nice, his favorite color IS blue!")
    }
    else {
        alert("you tried..");
        console.log("feels bad, you'll get the next one.")
    }
}


function dogAnswer() {
    let userAnswer = prompt("Is Daniel's dog named Bleu?") 
    let answerDog = userAnswer.toLowerCase();

    if(answerDog === "no") {
        alert("good stuff, his dog's name is Clark.");
        console.log("good stuff, his dog's name is Clark")
    }
    else {
        alert("you tried..");
        console.log("feels bad, you'll get the next one.")
    }
}


function catAnswer() {
    let userAnswer = prompt("Is Daniel's cat named Archie?") 
    let answerCat = userAnswer.toLowerCase();

    if(answerCat === "yes") {
        alert("good stuff, his cat's name is Archie.");
        console.log("good stuff, his cat's name is Archie")
    }
    else {
        alert("you tried..");
        console.log("feels bad, you'll get the next one.")
    }
}


function carAnswer() {
    let userAnswer = prompt("Is Daniel's car a Tacoma?") 
    let answerCar = userAnswer.toLowerCase();

    if(answerCar === "yes") {
        alert("good stuff, his car is a Tacoma, and he will not shut up about it!");
        console.log("good stuff, his car is a Tacoma, and he will not shut up about it!")
    }
    else {
        alert("you tried..");
        console.log("feels bad, you'll get the next one.")
    }
}


function foodAnswer() {
    let userAnswer = prompt("Is Daniel's favorite food pizza?") 
    let answerFood = userAnswer.toLowerCase();

    if(answerFood === "no") {
        alert("good stuff, his favorite food is actually burritos, yes plural.");
        console.log("good stuff, his favorite food is actually burritos, yes plural")
    }
    else {
        alert("you tried..");
        console.log("feels bad, you'll get the next one.")
    }
}