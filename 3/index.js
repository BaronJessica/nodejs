const fs = require('fs');

fs.readFile('texto.txt', (err,data)=>{
    let str = data.toString();

    // let newStr = str.split('e');
    
    let newStr = str.substr(0,3);

    console.log(newStr)
})