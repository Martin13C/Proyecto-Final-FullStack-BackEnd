import { actualizarPorIdDoctor, eliminarPorIdDoctor, obtenerPorIdDoctor } from "../service/DoctorService.mjs";


export const obtenerDoctor = async (req, res) => {
    try {
        const id = req.user.id
        const doctor = await obtenerPorIdDoctor(id);
        if (!doctor) {
            return res.status(404).json({ msg: "Doctor no encontrado" });
        }
        console.log("como se ve el doctor en el envio de atos", doctor)
        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const actualizarDoctor = async (req, res) => {
    try {

        // cambiar a id de token
        const { id } = req.params;
        const datos = req.body;
        const doctor = await actualizarPorIdDoctor(id, datos);
        
        if (!doctor) return res.status(404).json({ msg: "Doctor no encontrado para actualizar" });
        res.status(200).json(doctor);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const eliminarDoctor = async (req, res) => {
    try {
        const id = req.user.id
        const doctor = await eliminarPorIdDoctor(id);
        if (!doctor) return res.status(404).json({ msg: "Doctor no encontrado para eliminar" });
        res.status(200).json({ msg: "Doctor eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};