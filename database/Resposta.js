import { DataTypes } from 'sequelize'
import connection from './database.js'

const Resposta = connection.define('respostas', {
  corpo: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  perguntaId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

export default Resposta

Resposta.sync({ force: false }).then(() => {})
