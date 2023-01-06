import express from 'express'
export const app = express()

app.get('/testing', (req, res) => {
  return res.send('It seems to work')
})
