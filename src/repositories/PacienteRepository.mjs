import IRepository from "./IRepository.mjs";
import { Paciente } from '../models/PacienteModel.mjs'

class PacienteRespository extends IRepository {  

    async obtenerPorId (id) {
        return await Paciente.findById(id)
    }
    async actualizarPorId (id, data) {
        return await Paciente.findByIdAndUpdate(id, data,{ new: true});
    }
    async eliminarPorId (id) {
        return await Paciente.findByIdAndDelete(id);
    }
}

export default new PacienteRespository();