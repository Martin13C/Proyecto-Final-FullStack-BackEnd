import {
  actualizarPorIdAsistente,
  eliminarPorIdAsistente,
  obtenerPorIdAsistente,
  obtenerTodosAsistente,
} from "../service/AsistenteService.mjs";

export const obtenerTodosAsistentes = async (req, res) => {
  try {
    console.log("🔍 User ID:", req.user.id);
    console.log("🔍 User object:", req.user);

    const idDoctor = req.user.id;
    console.log("🔍 idDoctor:", idDoctor);

    if (!idDoctor) {
      return res.status(401).json({ mensaje: "id Requerido" });
    }

    const asistentes = await obtenerTodosAsistente(idDoctor);
    if (!asistentes)
      return res.status(404).json({ msg: "Asistente no encontrado" });
    res.status(200).json(asistentes);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const obtenerAsistente = async (req, res) => {
  try {
    const id = req.user.id
    const asistente = await obtenerPorIdAsistente(id);
    if (!asistente)
      return res.status(404).json({ msg: "Asistente no encontrado" });
    res.status(200).json(asistente);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const actualizarAsistente = async (req, res) => {
  try {
    const id = req.user.id
    const datos = req.body
    const asistente = await actualizarPorIdAsistente(id, datos);
    if (!asistente)
      return res
        .status(404)
        .json({ msg: "Asistente no encontrado para actualizar" });
    res.status(200).json(asistente);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const eliminarAsistente = async (req, res) => {
  try {
    const { id } = req.params;
    const asistente = await eliminarPorIdAsistente(id);
    if (!asistente)
      return res
        .status(404)
        .json({ msg: "Asistente no encontrado para eliminar" });
    res.status(200).json({ msg: "Asistente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
