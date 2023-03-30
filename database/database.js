import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'
dotenv.config()

const password = process.env.MYSQL_PASSWORD

const connection = new Sequelize('Answers&Questions', 'root', password, {
  host: 'localhost',
  dialect: 'mysql'
})

export default connection
