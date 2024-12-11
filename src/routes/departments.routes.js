import { Router } from "express";
import { getdepartments } from "../controllers/departments.controllers.js";

const routes = Router()

routes.get("/departments", getdepartments)

export default routes