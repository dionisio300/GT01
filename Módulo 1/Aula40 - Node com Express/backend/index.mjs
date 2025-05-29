/*
criar o arquivo index.mjs
npm install express
npm install --save-dev nodemon
npm init -y
editar o package.json:
"start":"node index.mjs",
"dev": "nodemon index.mjs"
*/

import express from 'express'

const app = express()
const porta = 3000

app.use(express.json())

let usuarios = [
    {id:'1',nome:'Maria', ativo:true},
    {id:'2',nome:'João', ativo:true},
    {id:'3',nome:'Pedro', ativo:false}
]

app.get('/',(req,res) => {
    console.log(req)
    res.send('<h1>Olá mundo</h1>')
})

app.get('/usuarios',(req,res) => {
    res.json(usuarios)
})


app.get('/usuarios/:id',(req,res) => {
    let id = req.params.id
    for(let i = 0;i < usuarios.length;i++){
        if(id == usuarios[i].id){
            res.json(usuarios[i])
        }
    }
    res.send('Usuario não encontrado')
})



app.post('/usuarios',(req,res) => {
    let novoUsuario = req.body
    console.log(novoUsuario)
    res.send('Usuario recebido')
})


app.listen(porta,() => {
    console.log(`Servidor rodando na porta ${porta}`)
})











