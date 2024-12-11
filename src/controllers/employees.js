import { pool } from "../database"

export const postEmployee = async (req, res) => {
    const { ci, rif, first_name, middle_name, last_name, surname, address, phone } = req.body
    const { birth_date, start_date, nationality, blood_type, allergies, department, photo } = req.body

    const cadena = `insert into employees(ci, rif, first_name, middle_name, last_name, surname, address, phone, `
    cadena += `birth_date, start_date, nationality, blood_type, allergies, department, photo) values `
    cadena += `(${ci}, ${rif}, ${first_name}, ${middle_name}, ${last_name}, ${surname}, ${address}, ${phone}, `
    cadena += `${birth_date}, ${start_date}, ${nationality}, ${blood_type}, ${allergies}, ${department}, ${photo})`;

    const { rows } = await pool.query(cadena)
    res.json(rows[0])
}

export const getEmployees = async (req, res) => {
    const { rows } = await pool.query('select * from employees')
    res.json(rows)
}

export const getEmployee = async (req, res) => {
    const { id } = req.params
    const { rows } = await pool.query(`select * from employees where id=${id}`)

    if (rows.length == 0) { return res.status(404).json({ message: "User not found" }) }
    res.json(rows[0])
}

export const deleteEmployee = async (req, res) => {
    const { id } = req.params
    const { rowCount } = await pool.query(`delete from employees where id=${id}`)

    if (rowCount == 0) { return res.status(404).json({ message: "User not found" }) }

    res.sendStatus(204)
}

export const updateEmployee = async (req, res) => {
    const { id } = req.params
    const { ci, rif, first_name, middle_name, last_name, surname, address, phone } = req.body
    const { birth_date, start_date, nationality, blood_type, allergies, department, photo } = req.body

    const cadena = `update employees set ci=${ci}, rif=${rif}, first_name=${first_name}, middle_name=${middle_name}`
    cadena += `, last_name=${last_name}, surname=${surname}, address=${address}, phone=${phone}, `
    cadena += `birth_date=${birth_date}, start_date=${start_date}, nationality=${nationality}, `
    cadena += `blood_type=${blood_type}, allergies=${allergies}, department=${department}, photo=${photo} `
    cadena += `where id=${id}`

    const { rows } = await pool.query(cadena)

    res.json(rows[0])
}