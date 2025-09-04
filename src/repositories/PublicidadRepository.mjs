import IRepository from "./IRepository.mjs";
import { Publicidad } from '../models/PublicidadModel.mjs'

class PublicidadRespository extends IRepository {  

    async obtenerTodo () {
        return await Publicidad.find()
    }
    async obtenerTodo2 (idDoctor) {
        return await Publicidad.find({idDoctor : idDoctor})
    }
    async colocarNuevo (data) {
        return await Publicidad.create(data);
    }
    async obtenerPorId (id) {
        return await Publicidad.findById(id)
    }
    async actualizarPorId (id, data) {
        return await Publicidad.findByIdAndUpdate(id, data, { new: true });
    }
    async eliminarPorId (id) {
        return await Publicidad.findByIdAndDelete(id);
    }
}

export default new PublicidadRespository();