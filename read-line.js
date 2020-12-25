var fs = require('fs');
var readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('large.log'),
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  console.log(line);
});

// rl.on('pause', () => {
//   console.log('Done!');
// });
