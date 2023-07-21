const fs = require('fs');
fs.appendFile('second.txt', 'I like NodeJS', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
