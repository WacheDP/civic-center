import { Router } from "express";
import {
    createdetvacdeduction, createdetvacgrosspay, createvacation, deletedetvacdeduction, deletedetvacgrosspay,
    deletevacation, getdetvacdeduction, getdetvacdeductions, getdetvacgrosspay, getdetvacgrosspays, getvacation,
    getvacations, updatedetvacdeduction, updatedetvacgrosspay, updatevacation
} from "../controllers/vacations.controllers.js";

const routes = Router()

routes.get("/vacations", getvacations)
routes.get("/vacations/:id", getvacation)
routes.get("/vacations/grosspay", getdetvacgrosspays)
routes.get("/vacations/grosspay/:id", getdetvacgrosspay)
routes.get("/vacations/deductions", getdetvacdeductions)
routes.get("/vacations/deductions/:id", getdetvacdeduction)
routes.post("/vacations", createvacation)
routes.post("/vacations/grosspay", createdetvacgrosspay)
routes.post("/vacations/deductions", createdetvacdeduction)
routes.put("/vacations", updatevacation)
routes.put("/vacations/grosspay", updatedetvacgrosspay)
routes.put("/vacations/deductions", updatedetvacdeduction)
routes.delete("/vacations/:id", deletevacation)
routes.delete("/vacations/grosspay/:id", deletedetvacgrosspay)
routes.delete("/vacations/deductions/:id", deletedetvacdeduction)

export default routes