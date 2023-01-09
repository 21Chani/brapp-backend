import { Sequelize } from 'sequelize'
import { PSQL_DATABASE, PSQL_HOST, PSQL_PASSWORD, PSQL_PORT, PSQL_USER } from '../lib/process.env'

export const postgres = new Sequelize(PSQL_DATABASE, PSQL_USER, PSQL_PASSWORD, {
  dialect: 'postgres',
  host: PSQL_HOST,
  port: PSQL_PORT,
})

export async function connectDb() {
  const date = Date.now()
  await postgres.sync({ logging: false })
  const ms = Date.now() - date
  console.log(`Database connected successfuly. ${ms}ms`)
}

export async function disconnectDb() {
  const date = Date.now()
  await postgres.close()
  const ms = Date.now() - date
  console.log(`Database disconnected successfuly. ${ms}ms`)
}
