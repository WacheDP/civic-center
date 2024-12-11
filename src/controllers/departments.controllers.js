import { pool } from "../database.js"

export const getdepartments = async (req, res) => {
    const response = await pool.query("select * from departments order by id asc")
    res.status(200).json(response.rows)
}