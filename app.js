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
function color() {
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



