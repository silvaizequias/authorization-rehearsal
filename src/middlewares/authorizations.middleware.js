const userDuty = (authortizations) => {
    return (req, res, next) => {
        const authDuty = req.body.duty
        if (authortizations.includes(authDuty)) { next() } else {
            return res.status(401).json("Is Not Authorized")
        }
    }
}

const memberRole = (authortizations) => {
    return (req, res, next) => {
        const authRole = req.body.role
        if (authortizations.includes(authRole)) { next() } else {
            return res.status(401).json("Is Not Authorized") 
        }
    }
}

module.exports = { userDuty, memberRole }