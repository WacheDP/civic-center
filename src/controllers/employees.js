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