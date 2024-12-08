import { Router } from 'express'
import { postEmployee } from '../controllers/employees'

const router = Router()

router.post('/employees', postEmployee)

export default router