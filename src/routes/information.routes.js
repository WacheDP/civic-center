import { Router } from "express";
import { createinformation, getinformation, updateinformation } from "../controllers/information.controllers.js";

const routes = Router()

routes.get("/information", getinformation)
routes.post("/information", createinformation)
routes.put("/information", updateinformation)

export default routes