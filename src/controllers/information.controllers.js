import { pool } from "../database.js"

export const createinformation = async (req, res) => {
    try {
        const { dir, phone, email } = req.body

        const { rows } = await pool.query(
            "insert into information(dir, phone, email) values ($1, $2, $3) returning *",
            [dir, phone, email]
        )

        res.status(201).json(rows[0])
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const getinformation = async (req, res) => {
    const response = await pool.query('select * from information')
    res.status(200).json(response.rows)
}

export const updateinformation = async (req, res) => {
    const id = parseInt(req.params.id);
    const { dir, phone, email } = req.body

    const { rows } = await pool.query(
        "update information set dir=$1, phone=$2, email=$4 where id=$5 returning *",
        [dir, phone, email, id]
    );

    return res.json(rows[0]);
};