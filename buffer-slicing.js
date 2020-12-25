const fs = require('fs');

const dataBuffer = fs.readFileSync('sample.bin');
const testBuffer = Buffer.from('This is a sentence that should be long enough to slice', 'utf-8');

const SLICE_WINDOW = 1000; // Bytes

// const bufferLength = dataBuffer.length;
// console.log(bufferLength);

// const sliceCount = Math.ceil(bufferLength / SLICE_WINDOW);
// console.log(sliceCount);

let start = 0;
let end = SLICE_WINDOW;
let base64String = '';

// const base64StringNoSlice = Buffer.from(dataBuffer).toString('base64');
base64StringNoSlice = testBuffer.slice(0, 20).toString('base64');
console.log(base64StringNoSlice);

base64String += testBuffer.slice(0, 10).toString('base64');
base64String += testBuffer.slice(10, 20).toString('base64');
console.log(base64String);

// while (end < bufferLength) {
//   base64String += dataBuffer.slice(start, end).toString('base64');

//   start += SLICE_WINDOW;
//   end += SLICE_WINDOW;
// }

console.log(base64StringNoSlice === base64String);
