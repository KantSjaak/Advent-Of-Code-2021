const fs = require('fs');

let inputArray = fs.readFileSync('input.txt', 'utf8').split('\r\n').map(Number);

let increased = 0;

let numbers = [];

for (let index = 1; index < inputArray.length - 1; index++) {
    numbers.push(inputArray[index - 1] + inputArray[index] + inputArray[index + 1]);
}

for (let index = 1; index < numbers.length + 1; index++) {
    if (numbers[index] > numbers[index - 1]) {
        increased++;
    }
}

console.log(increased);