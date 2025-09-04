import IRepository from "./IRepository.mjs";
import { Doctor } from "../models/DoctorModel.mjs";

class DoctorRespository extends IRepository {
  async obtenerPorId(id) {
    return await Doctor.findById(id);
  };
  async actualizarPorId(id, data) {
    return await Doctor.findByIdAndUpdate(id, data, {
      new: true,
    }).select("-contraseña"); // ← Excluir contraseña
  };
  async eliminarPorId(id) {
    return await Doctor.findByIdAndDelete(id);
  }
}

export default new DoctorRespository();
