import { NextFunction, Request, Response } from 'express'

export function requireBody(...params: string[]) {
  return async function require(req: Request, res: Response, next: NextFunction) {
    for (const param of params) {
      const prop = req.body[param]
      if (!prop) return res.status(400).json({ error: `property ${param} can not be null` })
    }
    next()
  }
}
