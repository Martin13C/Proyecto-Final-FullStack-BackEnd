export function renderizarAsistente(asistente) {
  if (!asistente) {
    return null;
  }

  // Eliminar explícitamente los campos sensibles e innecesarios
  delete asistente.contraseña;
  delete asistente.__v;

  return {
    // transformacion de usuario base
    _id: asistente.toString() || null, //convertimos el id a un objeto plano
    nombre: asistente.nombre,
    email: asistente.email,
    imagen:
      asistente.imagen ||
      "https://i.pinimg.com/736x/0c/81/1d/0c811d331c3544a65bdef2ffd82e183e.jpg",
    idDoctor: asistente.idDoctor,
    rol: asistente.rol,
  };
}


export function renderizarListaDeAsistentes(asistentes) {
  // Aplica la función `renderizarPais` a cada elemento del array.
  return asistentes.map((asistente) => renderizarAsistente(asistente));
}
