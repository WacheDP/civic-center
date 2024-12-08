import { Router } from 'express'
import { getEmployee, getEmployees, postEmployee } from '../controllers/employees'

const router = Router()

router.post('/employees', postEmployee)

router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)

export default router