import PacienteRespository from "../repositories/PacienteRepository.mjs";

export async function obtenerPorIdPaciente(id) {
    return await PacienteRespository.obtenerPorId(id);
}
export async function actualizarPorIdPaciente(id, data) {
    return await PacienteRespository.actualizarPorId(id, data);
}
export async function eliminarPorIdPaciente(id) {
    return await PacienteRespository.eliminarPorId(id);
}
