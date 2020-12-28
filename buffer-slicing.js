const fs = require('fs');

const dataBuffer = fs.readFileSync('./dummy-files/sample.bin');
const testBuffer = Buffer.from('This is a sentence that should be long enough to slice.');

// Three octets can be converted to sextets without adding paddings.
const SLICE_WINDOW = 99;

const bufferLength = dataBuffer.length;
console.log('Buffer length:', bufferLength, 'Bytes');

// const sliceCount = Math.ceil(bufferLength / SLICE_WINDOW);
// console.log(sliceCount);

let start = 0;
let end = SLICE_WINDOW;
let base64String = '';

/**
 * Compare the two Base64 outputs that are converted with pre-slicing and without.
 * base64String will eventually go too big and fail to concatenate more string.
 */
// const base64StringNoSlice = Buffer.from(dataBuffer).toString('base64');

while (start < bufferLength) {
  base64String += dataBuffer.slice(start, end).toString('base64');

  start += SLICE_WINDOW;
  end += SLICE_WINDOW;
}
// console.log(base64StringNoSlice === base64String);

/**
 * https://en.wikipedia.org/wiki/Base64#Examples
 * This is to test the knowledge of base64 converting.
 * If the input is a multiple of three, then there is no need to add paddings.
 */
// base64StringNoSlice = testBuffer.slice(0, 6).toString('base64');
// console.log(base64StringNoSlice);

// base64String += testBuffer.slice(0, 3).toString('base64');
// base64String += testBuffer.slice(3, 6).toString('base64');
// console.log(base64String);

// console.log(base64StringNoSlice === base64String);  // true




