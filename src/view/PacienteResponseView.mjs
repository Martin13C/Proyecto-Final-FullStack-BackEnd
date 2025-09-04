export function renderizarPaciente(paciente) {
  if (!paciente) {
    return null;
  }

  // Eliminar explícitamente los campos sensibles e innecesarios
  delete paciente.contraseña;
  delete paciente.__v;

  return {
    // transformacion de usuario base
    _id: paciente.toString() || null, //convertimos el id a un objeto plano
    nombre: paciente.nombre,
    email: paciente.email,
    imagen:
      paciente.imagen ||
      "https://i.pinimg.com/736x/0c/81/1d/0c811d331c3544a65bdef2ffd82e183e.jpg",

    // transformacion de paciente
    telefono: paciente.telefono,
    edad: paciente.edad || "No especificado",
    direccion: paciente.direccion || "No especificado",
  };
}

