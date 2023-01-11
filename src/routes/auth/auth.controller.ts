import { Request, Response } from 'express'
import { v4 as uuidV4 } from 'uuid'
import crypto from 'crypto'
import { IMAGEKIT_PRIVATE } from '../../lib/process.env'

const oneHourInMs = 1000 * 60 * 60

export function httpAuth(req: Request, res: Response) {
  const expire = (Date.now() + oneHourInMs) / 1000
  const token = uuidV4()
  const signature = crypto
    .createHmac('sha1', IMAGEKIT_PRIVATE)
    .update(`${token}${expire}`)
    .digest('hex')

  return res.json({ expire, token, signature })
}
