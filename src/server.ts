import express from 'express'
import http from 'http'

const app = express()
const PORT = 8000

const server = http.createServer(app)
async function initializeServer() {
  server.listen(PORT, () => {
    console.log(`\n\n\n Server running in port: ${PORT}`)
  })
}

initializeServer()
