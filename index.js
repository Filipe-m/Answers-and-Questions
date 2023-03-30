import express from 'express'
import bodyParser from 'body-parser'
import connection from './database/database.js'

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
  res.send(`Chegou o formulário titulo: ${titulo}, descrição: ${descricao}`)
})

app.listen(3333, () => {
  console.log('Servidor iniciado')
})
