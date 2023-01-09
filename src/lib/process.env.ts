import dotenv from 'dotenv'
dotenv.config()

export const PSQL_PASSWORD = process.env.PSQL_PASSWORD
export const PSQL_DATABASE = process.env.PSQL_DATABASE
export const PSQL_HOST = process.env.PSQL_HOST
export const PSQL_USER = process.env.PSQL_USER
export const PSQL_PORT = +process.env.PSQL_PORT
