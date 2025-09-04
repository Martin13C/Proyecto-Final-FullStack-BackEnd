import express from "express"
import { obtenerTurnosPorDoctorController, crearTurno, eliminarTurno, actualizarTurno, obtenerTurno } from "../controllers/TurnosController.mjs";
import { hasPermission } from "../middleware/AuthMiddleware.mjs";

const turnoRutes = express.Router()

turnoRutes.put('/:id/editar',hasPermission("editar_turnos"), actualizarTurno)
turnoRutes.get('/:id/editar', hasPermission("ver_turno"),obtenerTurno)
turnoRutes.delete('/:id/eliminar',hasPermission("eliminar_turno"), eliminarTurno)

turnoRutes.post('/crearnuevo', hasPermission("crear_turnos"),crearTurno)
// listo
turnoRutes.get("/",hasPermission("ver_turnos"), obtenerTurnosPorDoctorController)

export default turnoRutes;