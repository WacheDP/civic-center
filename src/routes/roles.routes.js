import { Router } from "express";
import { getroles } from "../controllers/roles.controllers.js";

const routes = Router()

routes.get("/roles", getroles)

export default routes