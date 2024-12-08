import pg from 'pg'
import { DATABASE, HOST, PASSWORD, PORT_DATABASE, USER } from './config'

export const pool = new pg.Pool({
    user: USER,
    host: HOST,
    password: PASSWORD,
    database: DATABASE,
    port: PORT_DATABASE
})