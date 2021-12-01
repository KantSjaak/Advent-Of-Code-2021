const fs = require('fs');

let inputArray = fs.readFileSync('input.txt', 'utf8').split('\r\n').map(Number);

let increased = 0;

for (let index = 1; index < inputArray.length + 1; index++) {
    if (inputArray[index] > inputArray[index - 1]) {
        increased++;
    }
}

console.log(increased);