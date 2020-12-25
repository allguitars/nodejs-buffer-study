/**
 * Test if a Buffer content can be appened.
 * This code is working, meaning that the decoded buffer content can be added to a file
 */

const fs = require('fs');

// Read file
const fileData = fs.readFileSync('test.log');

// Encode the buffer in base64 and append it to a file
appendBuffer(fileData);

function appendBuffer(data) {
  try {
    const encoded = Buffer.from(data).toString('base64');

    fs.appendFileSync('base64.file', encoded);
  } catch (err) {
    console.log(err);
  }
}
