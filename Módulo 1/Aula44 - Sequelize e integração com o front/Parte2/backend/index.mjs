/*
criar o arquivo index.mjs
criar o arquivo .env
criar o arquivo .gitignore
npm install express
npm install mysql2
npm install --save-dev nodemon
npm install dotenv
npm install bcrypt
npm install cors
npm init -y
editar o package.json:
"start":"node index.mjs",
"dev": "nodemon index.mjs"
*/

import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const porta = 3000

let users = [
    {id:1, nome:'Maria', email:'maria@gmail.com'},
    {id:2, nome:'João', email:'joao@gmail.com'},
    {id:3, nome:'Pedro', email:'pedro@gmail.com'}
]
//teste

app.get('/usuarios',(req,res) => {
    return res.json(users)
})

app.listen(porta, ()=>{
    console.log(`O servidor está rodando na porta ${porta}`)
})