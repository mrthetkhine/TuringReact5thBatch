const fs = require('fs');
fs.promises.readFile('hello.txt')
            .then(data=>console.log(data.toString().length));