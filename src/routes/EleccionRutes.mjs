import express from "express"
import turnoRutes from "./TurnosRoutes.mjs";
import doctorRutes from "./DoctorRoutes.mjs";
import asistenteRutes from "./AsistenteRoutes.mjs";
import pacienteRutes from "./PacienteRoutes.mjs";
import authRutes from "./AuthRoutes.mjs";
import publicidadRutes from "./PublicidadRoutes.mjs";
import { autenticacionToken } from "../middleware/AuthMiddleware.mjs";


const eleccionRutes = express.Router()

eleccionRutes.use("/asistente",autenticacionToken, asistenteRutes)
eleccionRutes.use("/auth",authRutes)
eleccionRutes.use("/doctor", doctorRutes)
eleccionRutes.use("/paciente", pacienteRutes)
eleccionRutes.use("/publicidad",autenticacionToken, publicidadRutes)
eleccionRutes.use("/turnos",autenticacionToken, turnoRutes)

export default eleccionRutes;