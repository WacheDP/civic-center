import { Router } from 'express'
import { pool } from '../database.js'

const router = Router()

router.get('/users', async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM users')
    res.json(rows)
})

router.get('/users/:id', async (req, res) => {
    const { id } = req.params
    const { rows } = await pool.query(`SELECT * FROM users WHERE id=${id}`)

    if (rows.length == 0) { return res.status(404).json({ message: "User not found" }) }

    res.json(rows[0])
})

router.post('/users', async (req, res) => {
    const { name, employee, date } = req.body
    const { rows } = await pool.query(`INSERT INTO users (name, role) VALUES (${name}, ${employee},${date})`)
    res.json(rows[0])
})

router.delete('/users/:id', async (req, res) => {
    const { id } = req.params
    const { rowCount } = await pool.query(`DELETE FROM users WHERE id=${id}`)

    if (rowCount == 0) { return res.status(404).json({ message: "User not found" }) }

    res.sendStatus(204)
})

router.put('/users/:id', async (req, res) => {
    const { id } = req.params
    const { name, employee, date } = req.body

    const { rows } = await pool.query(`UPDATE users SET name=${name}, employee=${employee}, date=${date} WHERE id=${id}`)

    res.json(rows[0])
})

export default router