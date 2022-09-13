import httpProxy from 'express-http-proxy'
import cookieParser from 'cookie-parser'
import express from 'express'
import { MicroServices } from './microservices'
import { Authorizations } from './middlewares/authorizatios.middleware'

const app = express()
const port = process.env.PORT || 3000

const server1 = httpProxy(MicroServices.ms1)
const server2 = httpProxy(MicroServices.ms2)

const authProfile = Authorizations

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (_, res) => {
  res.status(200).send('Attlas Authorization Rehearsal!')
})

app.get('/auth', authProfile([1,2,3,4]), (req, res, next) => {
  res.status(200).send("You're Authorized!")
})

app.get('/server1', (req, res, next) => {
  server1(req, res, next)
})

app.get('/server2', (req, res, next) => {
  server2(req, res, next)
})

app.listen(port, () => {
  console.log(
    `⚡️[server]: Attlas Authorization Rehearsal on https://localhost:${port}`,
  )
})
