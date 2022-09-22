import prisma from '../lib/prisma'

export const Authorizations = (authorization: any) => {
  return (req, res, next) => {
    const group = req.body.group
    if (authorization.includes(group)) {
      next()
    } else {
      return res.status(401).json("You Are'nt Authorization!")
    }
  }
}   
