const arrayLength = Math.floor(Math.random(who.length));
let who = ['The dog', 'My grandma', 'His turtle', 'My bird'][arrayLength];
let action = ['ate', 'peed', 'crushed', 'broke'][arrayLength];
let what = ['my homework', 'the keys', 'the car'][arrayLength];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'][arrayLength];

document.querySelector("#excuse").innerHTML = who + " " + action + " " + what + " " + when;