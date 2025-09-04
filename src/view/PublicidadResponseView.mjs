export function renderizarPublicidad(publicidad) {
  if (!publicidad) {
    return null;
  }

  return {
    // transformacion de usuario base
    _id: publicidad.toString() || null, //convertimos el id a un objeto plano
    titulo : publicidad.titulo || 'Sin titulo',
    descripcion: publicidad.descripcion || 'Sin una descripcion',
    imagenUrl: publicidad.imagenUrl || 'https://i.pinimg.com/736x/0c/81/1d/0c811d331c3544a65bdef2ffd82e183e.jpg',
    idDoctor : publicidad.idDoctor
  };
}

