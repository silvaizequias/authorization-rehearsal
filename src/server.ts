import route from './routes'
import express from 'express'

const app = express()
const port = process.env.SERVER_PORT || 3300

const createError = require('http-errors')

app.use(express.json())

app.use('/', route)

app.use( async (req, res, next) => {
  next(createError.NotFound('Route not Found'))
})

app.use( (err, req, res, next) => {
  res.status(err.status || 500).json({
      status: false,
      message: err.message
  })
})

app.listen(port, () => {
  console.log(
    `⚡️[server]: Attlas Authorization Rehearsal on http://localhost:${port}`,
  )
})
