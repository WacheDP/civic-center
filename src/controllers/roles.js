import { pool } from '../database.js'

export const getRoles = async (req, res) => {
    const { rows } = await pool.query('select * from roles')
    res.json(rows)
}