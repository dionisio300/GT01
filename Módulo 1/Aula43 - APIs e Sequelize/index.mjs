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



app.get('/',(req,res) => {
    return res.send('API inicial')
})

app.get('/todosUsuarios',(req,res) =>{
    const conexao = conectarBanco()
    let sql = `select nome,tipo from usuarios`
    conexao.query(sql,(e,result) => {
        if(e){
            console.log(`Deu erro: ${e}`)
        }else{
            return res.json(result)
        }
        conexao.end()
    })
})

app.get('/todosAlunos',(req,res) =>{
    const conexao = conectarBanco()
    let sql = `select nome,tipo from usuarios where tipo = 'aluno'`
    conexao.query(sql,(e,result) => {
        if(e){
            console.log(`Deu erro: ${e}`)
        }else{
            return res.json(result)
        }
        conexao.end()
    })
})

app.get('/todosAlunos/:id',(req,res) =>{
    const conexao = conectarBanco()
    let id = req.params.id
    let sql = `select * from usuarios where tipo = 'aluno' and id = ${id}`
    conexao.query(sql,(e,result) => {
        if(e){
            console.log(`Deu erro: ${e}`)
        }else{
            return res.json(result)
        }
        conexao.end()
    })
})

app.post('/cadastrarUsuario',async (req,res) => {
    const conexao = conectarBanco()
    let novoUsuario = req.body

    novoUsuario.senha = await bcrypt.hash(novoUsuario.senha,10)

    let sql = `insert into usuarios (username, senha, nome, ativo, tipo) values
    ('${novoUsuario.username}','${novoUsuario.senha}','${novoUsuario.nome}',${novoUsuario.ativo},'${novoUsuario.tipo}')`

    conexao.query(sql,(e,result) => {
        if(e){
            console.log(e)
            return res.send('erro')
        }else{
            return res.send('Usuario Cadastrado!!')
        }
    })

})







app.listen(porta,()=>{
    console.log(`Servidor rodando na porta ${porta}`)
})