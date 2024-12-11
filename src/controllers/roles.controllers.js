import { pool } from "../database.js"

export const getroles = async (req, res) => {
    const response = await pool.query("select * from roles")
    res.status(200).json(response.rows)
}