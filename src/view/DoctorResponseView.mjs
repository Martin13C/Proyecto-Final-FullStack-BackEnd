export function renderizarDoctor(doctor) {
  if (!doctor) {
    return null;
  }

  // Eliminar explícitamente los campos sensibles e innecesarios
  delete doctor.contraseña;
  delete doctor.__v;

  return {
    // transformacion de usuario base
    _id: doctor._id.toString() || null, //convertimos el id a un objeto plano
    nombre: doctor.nombre,
    email: doctor.email,
    imagen:
      doctor.imagen ||
      "https://i.pinimg.com/736x/0c/81/1d/0c811d331c3544a65bdef2ffd82e183e.jpg",

    // transformacion de doctor
    profesion: doctor.prefesion,
    matricula: doctor.matricula,
    telefono: doctor.telefono,
    edad: doctor.edad || "No especificado",
    sexo: doctor.sexo || "No especificado",
    direccion: doctor.direccion || "No especificado",
  };
}

// export function renderizarListaDeDoctores(doctores) {
//   // Aplica la función `renderizarPais` a cada elemento del array.
//   return doctores.map((doctor) => renderizarDoctor(doctor));
// }
