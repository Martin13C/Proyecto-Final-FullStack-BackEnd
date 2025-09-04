import express from "express"
import { actualizarPublicidad, crearPublicidad, eliminarPublicidad, obtenerPublicidad, obtenerTodo, obtenerTodoXDoctor } from "../controllers/PublicidadController.mjs"
import { hasPermission } from "../middleware/AuthMiddleware.mjs"
import { validacionErrores } from "../middleware/ErroresMiddleware.mjs"
import { validarPublicidad } from "../middleware/PublicidadValidacion.mjs"

const publicidadRutes = express.Router()


// rutas para doctores y asistentes 
publicidadRutes.put('/:id/editar', hasPermission('editar_publicidad'), validarPublicidad(), validacionErrores, actualizarPublicidad)
publicidadRutes.get('/:id/editar', hasPermission('ver_publicidad'), obtenerPublicidad)
publicidadRutes.delete('/:id/eliminar', hasPermission('eliminar_publicidad'), eliminarPublicidad)
publicidadRutes.post('/crear', hasPermission('crear_pubicidad'), validarPublicidad(), validacionErrores, crearPublicidad)

publicidadRutes.get('/mio',hasPermission('ver_publicidades_por_doctor'), obtenerTodoXDoctor)

// ruta para todos 
publicidadRutes.get('/todo',hasPermission('ver_publicidades'), obtenerTodo)

export default publicidadRutes;
