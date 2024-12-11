import { pool } from "../database.js"

export const createvacation = async (req, res) => {
    try {
        const { employee, rate, today, start, end, gross_pay, total_deduction, net_pay } = req.body

        const { rows } = await pool.query(
            "insert into vacations(employee, rate, today, start, end, gross_pay, total_deduction, net_pay) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [employee, rate, today, start, end, gross_pay, total_deduction, net_pay]
        )

        res.status(201).json(rows[0])
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const getvacations = async (req, res) => {
    const { employee } = req.body

    const response = await pool.query(
        "select * from vacations where employee=$1",
        [employee]
    )

    res.status(200).json(response.rows)
}

export const getvacation = async (req, res) => {
    const id = parseInt(req.params.id)

    const response = await pool.query(
        "select * from vacations where id = $1",
        [id]
    )

    res.json(response.rows)
}

export const updatevacation = async (req, res) => {
    const id = parseInt(req.params.id);
    const { employee, rate, today, start, end, gross_pay, total_deduction, net_pay, status, updated_at } = req.body

    const { rows } = await pool.query(
        "update vacations set employee=$1, rate=$2, today=$3, start=$4, end=$5, gross_pay=$6, total_deduction=$7, net_pay=$8, status=$9, updated_at=$10 where id=$11 returning *",
        [employee, rate, today, start, end, gross_pay, total_deduction, net_pay, status, updated_at, id]
    );

    return res.json(rows[0]);
};

export const deletevacation = async (req, res) => {
    const id = parseInt(req.params.id);

    const { rowCount } = await pool.query(
        "delete from vacations where id=$1",
        [id]
    );

    if (rowCount === 0) { return res.status(404).json({ message: "User not found" }) }

    return res.sendStatus(204);
};

export const createdetvacgrosspay = async (req, res) => {
    try {
        const { vacation, item, days, daily_rate, total } = req.body

        const { rows } = await pool.query(
            "insert into det_vac_grosspay(vacation, item, days, daily_rate, total) values ($1, $2, $3, $4, $5) RETURNING *",
            [vacation, item, days, daily_rate, total]
        )

        res.status(201).json(rows[0])
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const getdetvacgrosspays = async (req, res) => {
    const { vacation } = req.body

    const response = await pool.query(
        "select * from det_vac_grosspay where vacation=$1",
        [vacation]
    )

    res.status(200).json(response.rows)
}

export const getdetvacgrosspay = async (req, res) => {
    const id = parseInt(req.params.id)

    const response = await pool.query(
        "select * from det_vac_grosspay where id = $1",
        [id]
    )

    res.json(response.rows)
}

export const updatedetvacgrosspay = async (req, res) => {
    const id = parseInt(req.params.id);
    const { vacation, item, days, daily_rate, total } = req.body

    const { rows } = await pool.query(
        "update det_vac_grosspay set vacation=$1, item=$2, days=$3, daily_rate=$4, total=$5 where id=$6 returning *",
        [vacation, item, days, daily_rate, total, id]
    );

    return res.json(rows[0]);
};

export const deletedetvacgrosspay = async (req, res) => {
    const id = parseInt(req.params.id);

    const { rowCount } = await pool.query(
        "delete from det_vac_grosspay where id=$1",
        [id]
    );

    if (rowCount === 0) { return res.status(404).json({ message: "User not found" }) }

    return res.sendStatus(204);
};

export const createdetvacdeduction = async (req, res) => {
    try {
        const { vacation, item, total } = req.body

        const { rows } = await pool.query(
            "insert into det_vac_deduction(vacation, item, total) values ($1, $2, $3) RETURNING *",
            [vacation, item, total]
        )

        res.status(201).json(rows[0])
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const getdetvacdeductions = async (req, res) => {
    const { vacation } = req.body

    const response = await pool.query(
        "select * from det_vac_deduction where vacation=$1",
        [vacation]
    )

    res.status(200).json(response.rows)
}

export const getdetvacdeduction = async (req, res) => {
    const id = parseInt(req.params.id)

    const response = await pool.query(
        "select * from det_vac_deduction where id = $1",
        [id]
    )

    res.json(response.rows)
}

export const updatedetvacdeduction = async (req, res) => {
    const id = parseInt(req.params.id);
    const { vacation, item, total } = req.body

    const { rows } = await pool.query(
        "update det_vac_deduction set vacation=$1, item=$2, total=$3 where id=$4 returning *",
        [vacation, item, total, id]
    );

    return res.json(rows[0]);
};

export const deletedetvacdeduction = async (req, res) => {
    const id = parseInt(req.params.id);

    const { rowCount } = await pool.query(
        "delete from det_vac_deduction where id=$1",
        [id]
    );

    if (rowCount === 0) { return res.status(404).json({ message: "User not found" }) }

    return res.sendStatus(204);
};