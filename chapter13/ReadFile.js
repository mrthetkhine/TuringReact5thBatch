const fs = require('fs');

console.log('Before file read');
fs.readFile('./Hello.txt',function(err,data)
{
    if(!err)
    {
        console.log('Data ',data.toString());
    }
});
console.log('After file read');