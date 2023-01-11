import { app } from './app'
import { DEFAULT_PORT } from './lib/constants'

const PORT = process.env.PORT || DEFAULT_PORT
app.listen(PORT, async () => {
  console.log('Running on port:', PORT)
})

export default app
