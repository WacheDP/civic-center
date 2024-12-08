import { Router } from 'express'
import { deleteEmployee, getEmployee, getEmployees, postEmployee, updateEmployee } from '../controllers/employees'

const router = Router()
router.post('/employees', postEmployee)
router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)
router.delete('/users/:id', deleteEmployee)
router.put('/users/:id', updateEmployee)

export default router