const fs = require('fs');

let inputArray = fs.readFileSync('input.txt', 'utf8').split('\r\n').map(Number);

let increased = 0;

for (let index = 2; index < inputArray.length + 1; index++) {
    if (inputArray[index - 1] + inputArray[index] + inputArray[index + 1] > inputArray[index - 2] + inputArray[index - 1] + inputArray[index]) {
        increased++;
    }
}

console.log(increased);