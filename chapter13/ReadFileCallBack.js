const fs = require('fs');
fs.readFile('filename.txt',(err,fileName)=>{
    //console.log('Err ',err);
    if(!err)
    {
        fs.readFile(fileName,(err2,content)=>
        {
            console.log('Data ',content.length);
        });
    }
})