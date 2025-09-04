import {
  actualizarPorIdPublicidad,
  crearNuevoPublicidad,
  eliminarPorIdPublicidad,
  obtenerPorIdPublicidad,
  obtenerPublicidades,
  obtenerPublicidades2,
} from "../service/PublicidadService.mjs";
import { Asistente } from "../models/AsistenteModel.mjs";

export const obtenerTodo = async (req, res) => {
  try {
    const publicidad = await obtenerPublicidades();
    if (!publicidad)
      return res.status(404).json({ msg: "Publicidades no encontrado" });
    res.status(200).json(publicidad);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const obtenerTodoXDoctor = async (req, res) => {
  try {
   const user = req.user; // Se corrigió el error de escritura
        let idDoctor;

        if (user.tipoUsuario === 'asistente') {
            idDoctor = user.doctorId;
        } else if (user.tipoUsuario === 'doctor') {
            idDoctor = user.id;
        } 
    
    const publicidad = await obtenerPublicidades2(idDoctor);
    if (!publicidad)
      return res.status(404).json({ msg: "Publicidades no encontrado" });
    res.status(200).json(publicidad);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const crearPublicidad = async (req, res) => {
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

        
        // En este punto, idDoctor estará correctamente configurado para un doctor o un asistente
        const publicidad = await crearNuevoPublicidad(data);
        return res.status(201).json(publicidad);

    } catch (error) {
        console.error('Error al crear publicidad:', error);
        return res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

export const obtenerPublicidad = async (req, res) => {
  try {
    const id = req.params.id
    console.log("id del params.id", id)
    const publicidad = await obtenerPorIdPublicidad(id);
    if (!publicidad)
      return res.status(404).json({ msg: "Publicidad no encontrada" });
    res.status(200).json(publicidad);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


export const actualizarPublicidad = async (req, res) => {
  try {
    const publicidad = await actualizarPorIdPublicidad(req.params.id, req.body);
    if (!publicidad)
      return res
        .status(404)
        .json({ msg: "publicidad no encontrada para actualizar" });
    res.status(200).json(turno);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const eliminarPublicidad = async (req, res) => {
  try {
    const publicidad = await eliminarPorIdPublicidad(req.params.id);
    if (!publicidad)
      return res
        .status(404)
        .json({ msg: "Publicidad no encontrada para eliminar" });
    res.status(200).json({ msg: "Publicidad eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
