import route from './routes'
import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/', route)

app.listen(port, () => {
  console.log(
    `⚡️[server]: Attlas Authorization Rehearsal on http://localhost:${port}`,
  )
})
