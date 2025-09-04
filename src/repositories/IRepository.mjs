class IRepository {

  async obtenerTodosDoc(idDoctor) {
    throw new Error("Metodo 'obtenerTodosDoc()' no implementado");
  }
  async obtenerTodos() {
    throw new Error("Metodo 'obtenerTodos()' no implementado");
  }
  async obtenerPorId(id) {
    throw new Error("Metodo 'obtenerPorId()' no implementado");
  }
  async colocarNuevo(data) {
    throw new Error("Metodo 'colocarNuevo()' no implementado");
  }
  async actualizarPorId(id, data) {
    throw new Error("Metodo 'actualizarPorId()' no implementado");
  }
  async eliminarPorId(id) {
    throw new Error("Metodo 'eliminarPorId()' no implementado");
  }
  async crearTurnos(idDoctor, horario) {
    throw new Error("Metodo 'crearTurnos()' no implementado");
  }

}

export default IRepository;
