import AsistenteRespository from "../repositories/AsistenteRepository.mjs";

export async function obtenerTodosAsistente(idDoctor) {
    return await AsistenteRespository.obtenerTodos(idDoctor);
}
export async function obtenerPorIdAsistente(id) {
    return await AsistenteRespository.obtenerPorId(id);
}
export async function actualizarPorIdAsistente(id, data) {
    return await AsistenteRespository.actualizarPorId(id, data);
}
export async function eliminarPorIdAsistente(id) {
    return await AsistenteRespository.eliminarPorId(id);
}
