import express from 'express'
import httpProxy from 'express-http-proxy'
import { MicroServices } from '../microservices'
import { Authorizations } from '../middlewares/authorizatios.middleware'

const router = express.Router()

const server1 = httpProxy(MicroServices.ms1)
const server2 = httpProxy(MicroServices.ms2)

const authProfile = Authorizations

router.get('/', (_, res) => {
  res.status(200).send('Attlas Authorization Rehearsal!')
})

router.get('/auth', authProfile([1, 2, 3, 4]), (req, res, next) => {
  res.status(200).send("You're Authorized!")
})

router.get('/server1', authProfile([3, 4]), (req, res, next) => {
  server1(req, res, next)
})

router.get('/server2', authProfile([1, 2]), (req, res, next) => {
  server2(req, res, next)
})

export default router
