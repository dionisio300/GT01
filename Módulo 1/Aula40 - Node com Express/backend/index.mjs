/*
criar o arquivo index.mjs
npm install express
npm install mysql2
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
    usuarios.push(novoUsuario)
    res.send('Usuario recebido')
})

// Novos códigos para a aula que vem
app.put('/usuarios/:id',(req,res) => {
    let id = req.params.id
    let novoNome = req.body
    console.log(id)
    for(let i = 0;i < usuarios.length;i++){
        if(id == usuarios[i].id){
            usuarios[i].nome = novoNome.nome
            res.send('Atualizado!')
        }
    }
    res.send('Usuario não encontrado')
})

// Deletar os valores
app.delete('/usuarios/:id',(req,res) => {
    let id = req.params.id
    console.log(id)
    for(let i = 0;i < usuarios.length;i++){
        if(id == usuarios[i].id){
            usuarios.splice(i, 1);
            return res.send('Deletado!')
        }
    }
    return res.send('Usuario não encontrado')
})

app.listen(porta,() => {
    console.log(`Servidor rodando na porta ${porta}`)
})











