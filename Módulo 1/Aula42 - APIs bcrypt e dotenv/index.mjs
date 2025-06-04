import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'


dotenv.config()
const app = express()
const porta = process.env.DB_PORTA
app.use(express.json())

// Conexão com o MySql
const conexao = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})

console.log("teste")

// Rotas com banco de dados

conexao.connect((erro) => {
    if(erro){
        console.log(`Erro ao conectar com o banco: ${erro}`)
    }else{
        console.log('Banco conectado com sucesso!')
    }
})



app.post('/cadastrarUser', async (req, res)=>{
    let novoUsuario = req.body
    novoUsuario.senha = await bcrypt.hash(novoUsuario.senha,10)
    console.log(novoUsuario)

    let sql = `insert into usuarios (username,senha,nome,ativo,tipo) values ('${novoUsuario.username}','${novoUsuario.senha}','${novoUsuario.nome}',${novoUsuario.ativo},'${novoUsuario.tipo}')`

    conexao.query(sql,(erro,result) => {
        if(erro){
            console.log(erro)
        }else{
            return res.send('Usuario cadastrado com sucesso!')
        }
    })
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


app.get('/professoresCadastrados',(req,res)=>{
    console.log('teste')
    let sql = `select * from professores`
    conexao.query(sql,(erro,result) => {
        if(erro){
            console.log(`Deu um erro: ${erro}`)
        }else{
            return res.json(result)
        }
    })
})
/*
1. Crie uma API que mostre os nomes dos professores com todas as turmas que cada professor tem.
*/
app.get('/disciplinasProfessores',(req, res) => {
    let sql = `SELECT usuarios.nome as nomeProf , disciplinas.nome as disciplina from usuarios JOIN professores on usuarios.id = professores.usuario_id join disciplinas on disciplinas.professor_id = professores.id;`

    conexao.query(sql,(erro,resp) => {
        if(erro){
            console.log(erro)
        }else{
            console.log(resp)
            return res.json(resp)
        }
    })

})


/*
2. Crie uma rota GET /alunos/:id/disciplinas que retorna o nome do aluno e uma lista com todas as disciplinas em que ele está matriculado, incluindo a data da matrícula e o nome do professor.

3. Crie uma rota GET /alunos que retorna uma lista com os dados dos alunos, incluindo:
id, nome, matrícula, data de nascimento, nome da turma e ano da turma.

4. Crie uma rota GET /turmas/:id/alunos que retorna os alunos de uma turma específica, com nome, matrícula e data de nascimento.

5. Crie uma rota GET /turmas/resumo que retorna todas as turmas com o número total de alunos matriculados em cada uma.
*/





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


