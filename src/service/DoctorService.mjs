import DoctorRespository from "../repositories/DoctorRepository.mjs";
import bcrypt from "bcryptjs";

export async function obtenerPorIdDoctor(id) {
    return await DoctorRespository.obtenerPorId(id);
}
export async function actualizarPorIdDoctor(id, data) {
        // Si viene contraseña, encriptarla
    if (data.contraseña) {
        data.contraseña = await bcrypt.hash(data.contraseña, 13);
    }
    return await DoctorRespository.actualizarPorId(id, data);
}
export async function eliminarPorIdDoctor(id) {
    return await DoctorRespository.eliminarPorId(id);
}
