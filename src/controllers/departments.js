import { pool } from "../database"

export const getDepartments = async (req, res) => {
    const { rows } = await pool.query('select * from departments')
    res.json(rows)
}