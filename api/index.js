const express = require('express')

const app = express()

const route = express.Router()

route.get('/', (req, res) => {
  return res.json({ success: true, message: 'Vercel is working fine' })
})

app.use(route)

app.listen(4000, () => {
  console.log('Server running in port: 4000')
})
