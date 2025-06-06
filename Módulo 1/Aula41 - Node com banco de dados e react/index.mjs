import express from 'express'
import mysql from 'mysql2'

const app = express()
const porta = 3000
app.use(express.json())

// Conexão com o MySql
const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'escola1'
})

// Rotas com banco de dados
conexao.connect((erro) => {
    if(erro){
        console.log(`Erro ao conectar com o banco: ${erro}`)
    }else{
        console.log('Banco conectado com sucesso!')
    }
})

app.get('/usuariosEscola/:id',(req,res) => {
    let id = req.params.id
    let sql = `select nome,tipo,username from usuarios where id = ${id}`
    conexao.query(sql, (erro,resultado) => {
        if(erro){
            console.log(`Erro ao realizar a consulta: ${erro}`)
            return res.send(erro)
        }else{
            console.log(resultado)
            return res.send(resultado)
        }
    })
})




let usuarios = [
    {id:'1',nome:'Maria', ativo:true},
    {id:'2',nome:'João', ativo:true},
    {id:'3',nome:'Pedro', ativo:false}
]

app.get('/',(req,res) => {
    res.send('Olá mundo')
})

app.get('/usuarios',(req,res)=>{
    res.json(usuarios)
})

app.get('/usuarios/:id',(req,res) => {
    let id = req.params.id
    for(let usuario of usuarios){
        if(usuario.id == id){
            return res.json(usuario)
        }
    }
    return res.send('Usuário não encontrado')
})

app.post('/cadastrar',(req,res) => {
    let novoUsuario = req.body
    console.log(novoUsuario)
    usuarios.push(novoUsuario)
    res.send('Usuário cadastrado com sucesso')
})

app.put('/atualizarNome/:id',(req, res) => {
    let id = req.params.id
    let atualizacao = req.body
    for(let usuario of usuarios){
        if(usuario.id == id){
            usuario.nome = atualizacao.nome
            return res.json(usuarios)
        }
    }
    return res.send('Usuário não encontrado!')
})

app.delete('/deletarUsuario/:id',(req,res) => {
    let id = req.params.id

    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].id == id){
            usuarios.splice(i,1)
            return res.json(usuarios)
        }
    }   
})

app.listen(porta,() => {
    console.log(`Servidor rodando na porta ${porta}`)
})



/*
Questão: Crie uma API RESTful para Gerenciar Alunos e suas Matrículas

Crie uma rota GET em /alunosComTurma que retorne todos os alunos com as seguintes informações:

nome completo do aluno (campo nome da tabela usuarios)
matrícula
data de nascimento
nome da turma


Crie uma rota POST em /cadastrarAluno que:

insira o usuário na tabela usuarios com tipo = 'aluno'
insira os dados do aluno na tabela alunos (relacionando com usuario_id recém-criado)


Crie uma rota PUT em /atualizarAluno/:id que atualize a matrícula e o nome do aluno (nas tabelas usuarios e alunos), usando o id da tabela alunos.

Crie uma rota DELETE em /deletarAluno/:id que:

delete o aluno pela tabela alunos

use o ON DELETE CASCADE já definido no banco para excluir também o respectivo usuario e quaisquer matriculas_disciplinas associadas

*/


