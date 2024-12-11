import express from "express"
import { PORT_SERVER } from "./config.js"
import RolesRoutes from "./routes/roles.routes.js";
import DepartmentsRoutes from "./routes/departments.routes.js";
import EmployeesRoutes from "./routes/employees.routes.js";
import InformationRoutes from "./routes/information.routes.js";
import ExchangeratesRoutes from "./routes/exchangerates.routes.js";
import VacationsRoutes from "./routes/vacations.routes.js";
import UsersRoutes from "./routes/users.routes.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(RolesRoutes)
app.use(DepartmentsRoutes)
app.use(EmployeesRoutes)
app.use(InformationRoutes)
app.use(ExchangeratesRoutes)
app.use(VacationsRoutes)
app.use(UsersRoutes)

app.listen(PORT_SERVER)
console.log("Servidor " + PORT_SERVER + " en linea")