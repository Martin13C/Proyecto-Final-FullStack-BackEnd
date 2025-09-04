import express from "express"
import { actualizarDoctor, eliminarDoctor, obtenerDoctor } from "../controllers/DoctorController.mjs";
import { autenticacionToken, hasPermission } from "../middleware/AuthMiddleware.mjs";
import { validarDoctor, validarDoctorEdicion } from "../middleware/DoctorValidacion.mjs";
import { registroD } from "../controllers/AuthController.mjs";
import { validacionErrores } from "../middleware/ErroresMiddleware.mjs";

const doctorRutes = express.Router()
// rutas para doctor unicamente
doctorRutes.put('/:id/editar',autenticacionToken,hasPermission("editar_doctor"), validarDoctorEdicion(), validacionErrores, actualizarDoctor)
doctorRutes.get('/editar',autenticacionToken,hasPermission("ver_doctor"), obtenerDoctor)
doctorRutes.delete('/eliminar',autenticacionToken,hasPermission("eliminar_doctor"), eliminarDoctor)

// ruta publica, sin restruccion
doctorRutes.post('/crear',validarDoctor(), validacionErrores, registroD)

// rodas las rutas probada
export default doctorRutes;

// rutas publica 
// post (paciente/crear, crearPaciente)
// post (doctor/crear, crearDoctor)

// ruta unicamente para doctor
// post (asistente/crear,  + validacion de doctor crearAsistente)