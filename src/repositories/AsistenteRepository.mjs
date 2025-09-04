import IRepository from "./IRepository.mjs";
import { Asistente } from '../models/AsistenteModel.mjs'

class AsistenteRespository extends IRepository {  

    async obtenerTodos (idDoctor) {
        return await Asistente.find({ doctorId: idDoctor })
    }
    async obtenerPorId (id) {
        return await Asistente.findById(id)
    }
    async actualizarPorId (id, data) {
        return await Asistente.findByIdAndUpdate(id, data,{ new: true });
    }
    async eliminarPorId (id) {
        return await Asistente.findByIdAndDelete(id);
    }
}

export default new AsistenteRespository();