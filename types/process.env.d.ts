declare namespace NodeJS {
  export interface ProcessEnv {
    PSQL_PASSWORD: string
    PSQL_DATABASE: string
    PSQL_HOST: string
    PSQL_USER: string
    PSQL_PORT: number
  }
}
