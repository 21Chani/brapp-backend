import http from 'http'
import { app } from './app'
import { DEFAULT_PORT } from './lib/constants'
import { mongoConnect } from './services/mongo'

const PORT = process.env.PORT || DEFAULT_PORT

app.get('/', (_, res) => res.send('Express on vercel!!!'))

app.listen(PORT, async () => {
  await mongoConnect()
  console.log('Running on port:', PORT)
})

export default app
