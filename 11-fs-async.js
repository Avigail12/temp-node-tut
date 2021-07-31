
// const fs = require('fs')
// fs.readFileSync

const { readFile, writeFile } = require('fs')
// console.log('start')
const first = readFile('./content/first.txt','utf8',(err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    const first = result;
    readFile('./content/second.txt','utf8',(err, result) => {
    if(err)
    {
        console.log(err);
         return;
    }
    const second = result;
    writeFile('./content/result-async.txt',
    `Here is the result : ${first}, ${second}`
    ,(err,result) => {
        if(err)
        {
            console.log(err);
            return;            
        }
        console.log(result);
    })
 })

})
