import express from 'express'
import bodyParser from 'body-parser'
import connection from './database/database.js'
import Pergunta from './database/Pergunta.js'

connection
  .authenticate()
  .then(() => {
    console.log('Successful database connection')
  })
  .catch(msg => {
    print(msg)
  })

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/perguntar', (req, res) => {
  res.render('perguntar')
})

app.post('/salvarPergunta', (req, res) => {
  const titulo = req.body.titulo
  const descricao = req.body.descricao
  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect('/')
  })
})

app.listen(3333, () => {
  console.log('Servidor iniciado')
})
