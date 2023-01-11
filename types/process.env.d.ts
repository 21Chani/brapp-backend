declare namespace NodeJS {
  export interface ProcessEnv {
    MONGO_USER: string
    MONGO_PASSWORD: string
    MONGO_DATABASE: string
    IMAGEKIT_PUBLIC: string
    IMAGEKIT_PRIVATE: string
    IMAGEKIT_ENDPOINT: string
  }
}
