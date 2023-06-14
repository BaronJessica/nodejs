const http = require('http');
const fs = require('fs'); //file system

const hostname = "127.0.0.1";
const port = 3000;

//CRIAR NOVO ARQUIVO
fs.writeFile('jessica.txt', 'teste nodejs', (err) => {
    if (err) throw err;
    console.log('arquivo criado!')
})


//CRIA NOVO ARQUIVO OU INSERE CONTEÚDO NO JÁ EXISTENTE


const server = http.createServer((req, res) => {


    //console.log(req) requisições do usuário
    if (req.url == '/jessica') {
        fs.readFile('index.html', function (err, data) {

            fs.appendFile('jessica.txt', '\nPrimeiros passos nodejs', (err) => {
                if (err) throw err;
                console.log("append salvo")
            })

            res.writeHead(200, { 'Content-type': 'text/html' });
            res.write(data);
            return res.end();
        })
    } else {
        return res.end()
    }
})

server.listen(port, hostname, () => {
    console.log("servidor rodando")

})