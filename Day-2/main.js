const fs = require('fs');

let inputArray = fs.readFileSync('input.txt', 'utf8').split('\r\n');

let depth = 0;
let horizontal = 0;
let aim = 0;

for (let index = 0; index < inputArray.length; index++) {
    switch (inputArray[index].split(' ')[0]) {
        case 'forward':
            horizontal += parseInt(inputArray[index].split(' ')[1]);
            depth += parseInt(inputArray[index].split(' ')[1]) * aim
            break;
        case 'down':
            aim += parseInt(inputArray[index].split(' ')[1]);
            break;
        case 'up':
            aim -= parseInt(inputArray[index].split(' ')[1]);
            break;
        default:
            break;
    }
}

console.log(depth * horizontal);