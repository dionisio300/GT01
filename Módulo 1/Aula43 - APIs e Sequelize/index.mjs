/*
criar o arquivo index.mjs
criar o arquivo .env
criar o arquivo .gitignore
npm install express
npm install mysql2
npm install --save-dev nodemon
npm install dotenv
npm install bcrypt
npm init -y
editar o package.json:
"start":"node index.mjs",
"dev": "nodemon index.mjs"
*/
import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'

// Instanciar o express e criar a porta

// utilizar o dotenv
dotenv.config()

const app = express()
const porta = process.env.NODE_PORTA

// Trabalhar com os dados em json
app.use(express.json())

// Função para se conectar com o banco de dados
function conectarBanco(){
    const conexao = mysql.createConnection({
        host: process.env.DB_host,
        user: process.env.DB_user,
        password: process.env.DB_password,
        database: process.env.DB_database
    })
    console.log('banco conectado com sucesso!')
    return conexao
}

conectarBanco()

app.get('/',(req,res) => {
    return res.send('API inicial')
})


app.listen(porta,()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})