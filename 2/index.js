const fs = require('fs');

fs.readFile('texto.txt', (err,data)=>{
    console.log(data.toString()); //para retornar o texto e não o buffer de saída
})