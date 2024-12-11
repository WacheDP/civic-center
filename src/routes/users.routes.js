import { Router } from "express";
import { createuser, deleteuser, getuser, getusers, updateuser } from "../controllers/users.controllers";

const routes = Router()

routes.get("/users", getusers)
routes.get("/users/:id", getuser)
routes.post("/users", createuser)
routes.put("/users", updateuser)
routes.delete("/users/:id", deleteuser)

export default routes