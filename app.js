'use strict';
/*

let userResponse = prompt("Pick a number");

let numberPicked = parseInt(userResponse);

// we want to say Congrats when correct number (42) is entered
// otherwise we say sorry

if(numberPicked === 42) {
    alert("Congrats");
} else {
    alert("sorry");
}

*/

let expr = prompt("Choose a fruit, oranges, mangoes, or papayas");
let exprReg = expr.toLowerCase();

switch (exprReg) {
    case 'oranges':
        console.log('Oranges are $0.59 a pound');
        break;
    case 'mangoes':
        console.log('Got Mangoes');
        break;
    case 'papayas':
        console.log('Papayas are 2.79 a pound');
        break;
    default:
        console.log('Sorry, we are out of ' + expr + '.');
}