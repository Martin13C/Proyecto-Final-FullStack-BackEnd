import PublicidadRespository from "../repositories/PublicidadRepository.mjs";


export async function obtenerPublicidades() {
    return await PublicidadRespository.obtenerTodo();
}
export async function obtenerPublicidades2(idDoctor) {
    return await PublicidadRespository.obtenerTodo2(idDoctor);
}
export async function obtenerPorIdPublicidad(id) {
    return await PublicidadRespository.obtenerPorId(id);
}
export async function crearNuevoPublicidad(data) {
    return await PublicidadRespository.colocarNuevo(data);
}
export async function actualizarPorIdPublicidad(id, data) {
    return await PublicidadRespository.actualizarPorId(id, data);
}
export async function eliminarPorIdPublicidad(id) {
    return await PublicidadRespository.eliminarPorId(id);
}
