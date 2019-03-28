
const fs = require('fs');


var promise = new Promise(function(){
    fs.readFile('./111.txt','utf-8',(err,dataStr) =>{
        if (err) throw err
        console.log(dataStr)
    })
})