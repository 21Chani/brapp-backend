import { Sequelize } from 'sequelize'
import { PSQL_DATABASE, PSQL_HOST, PSQL_PASSWORD, PSQL_PORT, PSQL_USER } from '../lib/process.env'

export const postgres = new Sequelize(PSQL_DATABASE, PSQL_USER, PSQL_PASSWORD, {
  dialect: 'postgres',
  host: PSQL_HOST,
  port: PSQL_PORT,
  ssl: true,
})

export async function connectDb() {
  const date = Date.now()
  console.log('\n---------------------------')
  console.log('Connecting to postgres instance...')
  try {
    import('../models/groups/group.postgres')
    await postgres.sync({ logging: false })
    const ms = Date.now() - date

    // Log
    console.log(`Database connected successfuly. ${ms}ms`)
    console.log('---------------------------\n')
  } catch (e) {
    console.log('Ocurred an error connecting to db. ')
    if (e instanceof Error) console.log('error:', e.message)
  }
}

export async function disconnectDb() {
  const date = Date.now()
  await postgres.close()
  const ms = Date.now() - date
  console.log(`Database disconnected successfuly. ${ms}ms`)
}
