const fs = require('fs');

const fileData = fs.readFileSync('500M.bin'); // Returns a Buffer object

const fileBody = fileData.toString('base64');
