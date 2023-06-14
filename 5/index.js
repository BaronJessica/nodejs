const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('qual o seu nome?', (name)=> {
    console.log('o nome do usuário é: '+name);
    rl.question('qual sua idade? ', (age)=>{
        console.log('A idade de '+name+' é '+age)
    })
})

rl.on('close', ()=>{
    console.log('adeus!')
    process.exit(0)
})