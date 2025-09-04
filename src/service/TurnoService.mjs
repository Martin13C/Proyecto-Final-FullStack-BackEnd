import TurnoRespository from "../repositories/TurnoRepository.mjs"

export async function obtenerTodosTurnos(idDoctor) {
    return await TurnoRespository.obtenerTodosDoc(idDoctor);
}
export async function obtenerPorIdTurno(id) {
    return await TurnoRespository.obtenerPorId(id);
}
export async function colocarNuevoTurno(data) {
    return await TurnoRespository.colocarNuevo(data);
}
export async function actualizarPorIdTurno(id, data) {
    return await TurnoRespository.actualizarPorId(id, data);
}
export async function eliminarPorIdTurno(id) {
    return await TurnoRespository.eliminarPorId(id);
}
