const express = require('express')
const httpProxy = require('express-http-proxy')

const { userDuty, memberRole } = require('./middlewares/authorizations.middleware')
const { system, notification } = require('./services')

const systemProxy = httpProxy(system)
const notificationProxy = httpProxy(notification)

const app = express()
const port = 3000

app.use(express.json())


app.get("/", (req, res) => {
    res.send("Attlas Authorization Listening")
})

app.get("/system", userDuty(["master", "owner"]), memberRole(["administrator", "technician"]), (req, res, next) => {
    systemProxy(req, res, next)
})

app.get("/notification", userDuty(["master", "owner"]), memberRole(["administrator", "technician"]), (req, res, next) => {
    notificationProxy(req, res, next)
})

app.listen(port, () => {
    console.log(`Attlas Authorization Listening on http://localhost:${port}`)
})