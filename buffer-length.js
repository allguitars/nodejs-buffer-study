const fs = require('fs');

const dataBuffer = fs.readFileSync('test.log');

console.log(dataBuffer.length);
