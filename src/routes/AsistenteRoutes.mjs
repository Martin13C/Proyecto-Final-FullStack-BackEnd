import express from "express"
import { actualizarAsistente, eliminarAsistente, obtenerAsistente, obtenerTodosAsistentes } from "../controllers/AsistenteController.mjs"
import { hasPermission } from "../middleware/AuthMiddleware.mjs"
import { validacionErrores } from "../middleware/ErroresMiddleware.mjs"
import { registroA } from "../controllers/AuthController.mjs"
import { validarAsistente } from "../middleware/AsistenteValidations.mjs"

const asistenteRutes = express.Router()

asistenteRutes.put('/editar', hasPermission("editar_asistente"), validarAsistente(), validacionErrores, actualizarAsistente)
asistenteRutes.get('/editar', hasPermission("ver_asistente"), obtenerAsistente)
asistenteRutes.delete('/:id/eliminar', hasPermission("eliminar_asistente"), eliminarAsistente)
asistenteRutes.get('/todos', hasPermission("ver_asistentes"), obtenerTodosAsistentes)

// solo los puede acceder un doctor
asistenteRutes.post('/crear',hasPermission("crear_asistente"), validarAsistente(), validacionErrores, registroA )

// todas probada
export default asistenteRutes;