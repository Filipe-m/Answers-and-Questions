import { DataTypes } from 'sequelize'
import connection from './database.js'

const Pergunta = connection.define('perguntas', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

export default Pergunta

Pergunta.sync({ force: false }).then(() => {})
