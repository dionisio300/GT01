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
npm install jsonwebtoken
editar o package.json:
"start":"node index.mjs",
"dev": "nodemon index.mjs"
*/
import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'
import jwt from 'jsonwebtoken'

const senhaJWT = '1234'

const app = express()
app.use(cors())
app.use(express.json())

const porta = 3000

// Conexão com o MySql
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'sistema_gestao_escolar'
})

// Rotas com banco de dados
conexao.connect((erro) => {
    if (erro) {
        console.log(`Erro ao conectar com o banco: ${erro}`)
    } else {
        console.log('Banco conectado com sucesso!')
    }
})


function autenticarUsuario(req,res, next){
    const token = req.headers.authorization?.split(' ')[1]
    console.log(token)
    if(!token){
        return res.status(401).json({msg:'Token não fornecido'})
    }

    try {
        const usuario = jwt.verify(token,senhaJWT)
        req.usuario = usuario
        next()
    } catch (error) {
        return res.status(403).json({msg:'Token inválido'})
    }

}

app.get('/', (req, res) => {
    res.send('Servidor rodando')
})

app.get('/dadosProfessor',autenticarUsuario,(req,res) => {
    return res.send('API professores')
})

app.post('/verificarLogin', (req, res) => {
    let usuario = req.body
    console.log(usuario)
    let sql = `select * from usuarios where email = '${usuario.email}' and senha = '${usuario.senha}'`
    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            console.log(erro)
            return res.status(500).json({ erro: "Erro no servidor" })
        }



        if (resultado.length > 0) {
            const usuario = resultado[0]
            console.log(usuario)

            //const token = jwt.sign({dados},senha,{opcoes})
            const token = jwt.sign({
                id: usuario.id,
                nome: usuario.nome,
                tipo: usuario.tipo_usuario
            }, senhaJWT,
                {
                    expiresIn: '1h'
                })
            resultado = resultado[0]
            console.log('Resultado encontrado')

            return res.status(200).json({
                token, usuario: {
                    id: usuario.id,
                    nome: usuario.nome,
                    tipo: usuario.tipo_usuario
                }
            })
        } else {
            return res.status(401).json({ erro: 'erro' })
        }
    })
})


app.listen(porta, () => {
    console.log(`O servidor está rodando na porta ${porta}`)
})