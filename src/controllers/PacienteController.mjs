import { actualizarPorIdPaciente, eliminarPorIdPaciente, obtenerPorIdPaciente } from "../service/PacienteService.mjs";

export const obtenerPaciente = async (req, res) => {
    try {
        const id = req.user.id
        const paciente = await obtenerPorIdPaciente(id);
        if (!paciente) return res.status(404).json({ msg: "Paciente no encontrado" });
        res.status(200).json(paciente);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const actualizarPaciente = async (req, res) => {
    try {
        const id = req.user.id
        const datos = req.body
        const paciente = await actualizarPorIdPaciente(id, datos);
        if (!paciente) return res.status(404).json({ msg: "Paciente no encontrado para actualizar" });
        res.status(200).json(paciente);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const eliminarPaciente = async (req, res) => {
    try {
        const id = req.user.id
        const paciente = await eliminarPorIdPaciente(id);
        if (!paciente) return res.status(404).json({ msg: "Paciente no encontrado para eliminar" });
        res.status(200).json({ msg: "Paciente eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};