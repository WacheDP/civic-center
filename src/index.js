import express from 'express'
import { PORT } from './config.js'
import userRoutes from './routes/users.js'
import rolesRoutes from './routes/roles.js'
import employeesRoutes from './routes/employees.js'

const app = express()

app.use(express.json())
app.use(userRoutes)
app.use(rolesRoutes)
app.use(employeesRoutes)

app.listen(PORT)
console.log("Servidor en linea", PORT)