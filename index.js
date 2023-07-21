const fs = require('fs');
fs.appendFile('second.txt', 'I like NodeJS', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
fs.writeFile('second.txt', '\nЯ люблю NodeJS', err => {
    if (err) {
      console.error(err);
    }
});