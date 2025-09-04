import express from "express"
import { ingreso } from "../controllers/AuthController.mjs";

const authRutes = express.Router()

authRutes.post('/ingreso', ingreso)


export default authRutes;