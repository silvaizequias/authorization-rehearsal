const express = require('express')
const { userDuty, memberRole } = require('./middlewares/authorizations.middleware')

const app = express()
const port = 3000

app.use(express.json())


app.get("/", userDuty(["master", "owner"]), memberRole(["administrator", "technician"]), (req, res) => {
    res.send('Is Authorizated')
})

app.listen(port, () => {
    console.log(`Attlas Roles Listening on http://localhost:${port}`)
})