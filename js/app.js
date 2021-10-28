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
            alert(wrongAnswer);
            console.log(count);
            // console.log("feels bad, you'll get the next one.");
        }
    }
}

function correctAnswerCount() {
    document.getElementById('inc').textContent = `You answered ${count}/6 right, thanks for playing ${username}!`
}

function question6() {
    let i;
    let userAnswerNumb;
    let guessed = true;

    while(guessed == true) {
        for(i = 0; i < 4; i++) {
        userAnswerNumb = prompt(`Guess a number between 1 and 10!`);
        userAnswerNumb = parseInt(userAnswerNumb, 10);

        if(userAnswerNumb === 5) {
            alert(`Well done!`);
            document.querySelector('#guessing').textContent = `Wow, so clever ${username}! The answer WAS 5!`;
            count++;
            guessed = false;
            break;
        } else if(userAnswerNumb > 5) {
            alert(`Too high, try again!`);
            console.log(i);    
        } else if(userAnswerNumb < 5){
                alert(`Too low, try again!`);
                console.log(i);    
        } else {
            alert(`somebody didn't read the rules of the game..`)
        }
        }

        if(i === 4) {
            alert(`Sorry, you used all your tries! The correct answer was 5`);
            guessed = false;
            document.querySelector('#guessing').textContent = `Sorry, you used all your tries! The correct answer was 5..`;
        }
    }
}

// function question7() {
//     let correctAnswers = ['Archie', 'Clark']
//     let i;
//     let userAnswer;

//     for(i = 0; i < 6; i++) {
//         userAnswer = prompt(`Guess the names of my animals from the list!`, `Archie, Joey, Clark, Pete, JimBob, Coolio`);
//         userAnswer = parseInt(userAnswerNumb, 10);

//         if(userAnswer === 'Archie' || 'Clark')
//     }
// }
    
    









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
