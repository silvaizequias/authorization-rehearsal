import prisma from '../lib/prisma'

export const Authorizations = (auth: any) => {
  return (req, res, next) => {
    const authProfile = req.body.group
    if (auth.includes(authProfile)) {
      next()
    } else {
      return res.status(401).json("You Are'nt Authorization!")
    }
  }
}
