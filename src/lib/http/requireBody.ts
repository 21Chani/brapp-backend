import { NextFunction, Request, Response } from 'express'
import { propertyToPortuguese } from '../translate'

export function requireBody(...params: string[]) {
  return async function require(req: Request, res: Response, next: NextFunction) {
    for (const param of params) {
      const prop = req.body[param]
      if (!prop)
        return res
          .status(400)
          .json({ message: `A propiedade ${propertyToPortuguese(param)} não pode ser nula` })
    }
    next()
  }
}
