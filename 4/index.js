const fs = require('fs');
const read = require('readline');

fs.unlink('texto.txt', function(err){
    console.log('arquivo deletado')
})

fs.rename('texto.txt', 'hello.txt', function(err){
    console.log('arquivo renomeado')
})