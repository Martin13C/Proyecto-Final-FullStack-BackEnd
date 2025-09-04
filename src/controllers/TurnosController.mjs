import { Asistente } from "../models/AsistenteModel.mjs";
import {
  obtenerTodosTurnos,
  obtenerPorIdTurno,
  colocarNuevoTurno,
  eliminarPorIdTurno,
  actualizarPorIdTurno,
} from "../service/TurnoService.mjs";

// funcion para obtener turnos por id de doctor
export const obtenerTurnosPorDoctorController = async (req, res) => {
  try {
    let idDoctor;

    if (req.user.tipoUsuario === "doctor") {
      idDoctor = req.user.id;
    } else if (req.user.tipoUsuario === "asistente") {
      const asistente = await Asistente.findById(req.user.id);
      if (!asistente) throw new Error("Asistente no válido");
      idDoctor = asistente.doctorId;
    }
    console.log("🔍 User ID:", req.user.id);
    console.log("🔍 User object:", req.user);

    // const idDoctor = req.user.id; //filtra por id del doctor en el token
    console.log("🔍 idDoctor:", idDoctor);
    if (!idDoctor) {
      return res.status(400).json({ msg: "El ID del doctor es requerido." });
    }

    const turnos = await obtenerTodosTurnos(idDoctor);
    if (turnos.length === 0) {
      return res
        .status(404)
        .json({ msg: "No se encontraron turnos para este doctor." });
    }

    res.status(200).json(turnos);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const crearTurno = async (req, res) => {
  try {

    let idDoctor;

    if (req.user.tipoUsuario === "doctor") {
      idDoctor = req.user.id;
    } else if (req.user.tipoUsuario === "asistente") {
      const asistente = await Asistente.findById(req.user.id);
      if (!asistente) throw new Error("Asistente no válido");
      idDoctor = asistente.doctorId;
    }

    const data = {
      ...req.body,
      idDoctor,
    };

    const turno = await colocarNuevoTurno(data);
    res.status(201).json(turno);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const obtenerTurno = async (req, res) => {
  try {
    const id = req.params.id
    console.log("id del params.id", id)
    const turno = await obtenerPorIdTurno(id);
    if (!turno) return res.status(404).json({ msg: "Turno no encontrado" });
    res.status(200).json(turno);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const actualizarTurno = async (req, res) => {
  try {
    const turno = await actualizarPorIdTurno(req.params.id, req.body);
    if (!turno)
      return res
        .status(404)
        .json({ msg: "Turno no encontrado para actualizar" });
    res.status(200).json(turno);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const eliminarTurno = async (req, res) => {
  try {
    const id = req.params.id

    const turno = await eliminarPorIdTurno(id);
    if (!turno)
      return res.status(404).json({ msg: "Turno no encontrado para eliminar" });
    res.status(200).json({ msg: "Turno eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
