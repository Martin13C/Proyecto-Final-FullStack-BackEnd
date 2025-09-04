import express from "express"
import { actualizarPaciente, eliminarPaciente, obtenerPaciente } from "../controllers/PacienteController.mjs"
import { registroP } from "../controllers/AuthController.mjs"
import { validarPaciente } from "../middleware/PacienteValidacion.mjs"
import { validacionErrores } from "../middleware/ErroresMiddleware.mjs"
import { autenticacionToken, hasPermission } from "../middleware/AuthMiddleware.mjs"

const pacienteRutes = express.Router()

pacienteRutes.put('/editar', autenticacionToken, hasPermission("editar_paciente"), validarPaciente(), validacionErrores, actualizarPaciente)
pacienteRutes.get('/editar', autenticacionToken ,hasPermission("ver_paciente"), obtenerPaciente)
pacienteRutes.delete('/eliminar', autenticacionToken, hasPermission("eliminar_paciente"), eliminarPaciente)

// ruta publica, sin restriccion 
pacienteRutes.post('/crear', validarPaciente(), validacionErrores, registroP)

export default pacienteRutes;