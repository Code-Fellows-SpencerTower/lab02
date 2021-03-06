'use strict';

let username;
let count = 0;
let i;
let answerChoices = [`yes`, `no`]
let questions = [`Is Daniel's favorite color blue?`, `Is Daniel's dog named Bleu?`, `Is Daniel's cat named Archie?`, `Is Daniel's car a Tacoma?`, `Is Daniel's favorite food pizza?`]

let correctAnswer = [`yes`, `no`, `yes`, `yes`, `no`]

let correctAnswersWritten = [`His favorite color is actually blue!`, `His dog's name is Clark.`, `His cat's name is Archie.`, `He drives a Tacoma, and he will not shut up about it!`, `His favorite food is actually burritos, yes plural!`]

let correctAnswersId = [`#color`, `#dog`, `#cat`, `#car`, `#food`]

let wrongAnswer = "you tried.."

function userName() {
    username = prompt("What is your name?");
    // console.log(username + "! Welcome to the site!"); 

    alert("Hello " + username + ", welcome to my site.");

    document.querySelector("h1").textContent = `Nice to meet you ${username}, hope you get to know me a bit better!`
}
// userName();

function allAnswer() {
    for (i = 0; i < questions.length; i += 1) {

        let userAnswer = prompt(questions[i])
        let answerLowerCase = userAnswer.toLowerCase();

        document.querySelector(correctAnswersId[i]).textContent = correctAnswersWritten[i];

        if (answerLowerCase === correctAnswer[i]) {
            alert("nice.");
            document.getElementById('inc').value = count += 1;
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
    document.getElementById('inc').textContent = `You answered ${count}/7 right, thanks for playing ${username}!`
}

function question6() {
    let userAnswerNumb;

    for (let x = 0; x < 4; x += 1) {
        userAnswerNumb = prompt(`Guess a number between 1 and 10!`);
        userAnswerNumb = parseInt(userAnswerNumb);

        if (userAnswerNumb === 5) {
            alert(`Well done!`);
            document.querySelector('#guessing').textContent = `Wow, so clever ${username}! The answer WAS 5!`;
            count += 1;
            console.log(userAnswerNumb);
            break;
        } else if (userAnswerNumb > 5) {
            alert(`Too high, try again!`);
            console.log(userAnswerNumb);
        } else if (userAnswerNumb < 5) {
            alert(`Too low, try again!`);
            console.log(userAnswerNumb);
        } else {
            alert(`somebody didn't read the rules of the game..`)
            x--;
        }
    }

    if (x === 4) {
        alert(`Sorry, you used all your tries! The correct answer was 5`);
        document.querySelector('#guessing').textContent = `Sorry, you used all your tries! The correct answer was 5..`;
    }
}

function question7() {
    let choices = ['tim', 'archie', 'hank', 'jimbob', 'clark', 'princess', 'tucker'];
    
    let isUserCorrect1 = false;
    let isUserCorrect2 = false; //Using these in order to escape the loop when the user get's both answers correct

    for (i = 0; i < 6; i += 1) {
        let userAnswer = prompt(`Please guess my animal names from the provided list.. Tim, Archie, Hank, Jimbob, Clark, Princess, Tucker`);
        let answerLower = userAnswer.toLowerCase();

        if (answerLower === choices[1]) {
            alert(`That's one!`);
            isUserCorrect1 = true;

            if (isUserCorrect1 && isUserCorrect2) {
                alert(`Congrats! Well done guessing`)
                count += 1;
                document.querySelector('#catguess').textContent = `Well done ${username}, somebody pays attention! My animals names are Clark and Archie!`
                break;
            }
        } else if (answerLower === choices[4]) {
            alert(`That's another one!`)
            isUserCorrect2 = true;

            if (isUserCorrect1 && isUserCorrect2) {
                alert(`Congrats! Well done guessing`)
                count += 1;
                document.querySelector('#catguess').textContent = `Well done ${username}, somebody pays attention! My animals names are Clark and Archie!`
                break;
            }
        } else if (i === 5) {
            alert('You tried, the correct answers were Archie(my cat) and Clark(my dog)')
            document.querySelector('#catguess').textContent = `Dang, get em next time. My pets names are Archie and Clark!`
        } else {
            
            for (let j = 0; j < choices.length; j += 1) { // j = 0  
                let cat = choices[j]; // cat = 'tim'
                if (answerLower === cat) { // tim === 'tim'  TRUE
                    alert('Sorry, that is incorrect.')
                    break;
                } else if(j === 6) {
                    alert('Sorry, that is not one of the choices!'); // I want this to happen when: full iteration, no matches, null
                    i -= 1; //used to give user attempt back for not entering one of the items on the array
                }
            }
        }
    }
}










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
