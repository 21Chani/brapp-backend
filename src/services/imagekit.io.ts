import ImageKit from 'imagekit'
import { IMAGEKIT_ENDPOINT, IMAGEKIT_PRIVATE, IMAGEKIT_PUBLIC } from '../lib/process.env'

export const imagekit = new ImageKit({
  privateKey: IMAGEKIT_PRIVATE,
  publicKey: IMAGEKIT_PUBLIC,
  urlEndpoint: IMAGEKIT_ENDPOINT,
})
