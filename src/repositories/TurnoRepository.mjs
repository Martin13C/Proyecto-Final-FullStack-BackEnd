import IRepository from "./IRepository.mjs";
import { Turno } from "../models/TurnosModel.mjs";

class TurnoRespository extends IRepository {
  async obtenerTodosDoc(idDoctor) {
    return await Turno.find({ idDoctor: idDoctor })
      .sort({ fecha: +1, hora: +1 }) // orden descendente por fecha y hora
      .exec();
  }
  async obtenerPorId(id) {
    return await Turno.findById(id);
  }
  async colocarNuevo(data) {
    return await Turno.create(data);
  }
  // cambio en el new 
  async actualizarPorId(id, data) {
    return await Turno.findByIdAndUpdate(id, data, { new: true });
  }
  async eliminarPorId(id) {
    return await Turno.findByIdAndDelete(id);
  }
}

export default new TurnoRespository();
