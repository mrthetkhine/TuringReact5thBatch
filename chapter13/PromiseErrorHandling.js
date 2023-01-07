const fs = require('fs');
fs.promises.readFile('somethingelse.txt')
    .then(data=>console.log('Succes ',data))
    .catch(err=>console.log("Error ",err))
    .finally(()=>console.log("Finally executed"))