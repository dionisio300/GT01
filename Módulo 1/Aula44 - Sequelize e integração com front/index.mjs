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
import { Sequelize,DataTypes } from 'sequelize'
// utilizar o dotenv
dotenv.config()
const sequelize = new Sequelize(
    process.env.DB_database,
    process.env.DB_user,
    process.env.DB_password,{
        host:process.env.DB_host,
        dialect:'mysql'
    }
)
try{
    await sequelize.authenticate()
    console.log('Banco Conectado com sucesso!')
}catch(e){
    console.log(e)
}
// Instanciar o express e criar a porta

const app = express()
const porta = process.env.NODE_PORTA

// Trabalhar com os dados em json
app.use(express.json())

app.get('/',(req,res) => {
    return res.send('API inicial')
})



app.listen(porta,()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})