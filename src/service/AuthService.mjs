import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Usuario } from "../models/UsuarioModel.mjs";
import { Rol } from "../models/RolModel.mjs";
import { Doctor } from "../models/DoctorModel.mjs";
import { Paciente } from "../models/PacienteModel.mjs";
import { Asistente } from "../models/AsistenteModel.mjs";

class AuthService {
  // se crearon 3 funciones de ahseo de contraseña, generacion de token y asignacion de toles y permisos ya que los modols de monggose que se crearon como discriminator!
  // de hacer una sola se crean solo usuarios bases sin los discriminator asignados

  // funcion para creacion de Doctores
  async registrarDocS(userData) {

    // buscamos si los datos existen en la base de datos
    const existInUser = await Usuario.findOne({
      email: userData.email });
      
     // si encuentra email y nombre dentro de la base de datos me marca el error
    if (existInUser) {
      throw new Error("Usuario o Email ya existe");
    }

    // encriptamiento de la contraseña
    const hashedPassword = await bcrypt.hash(userData.contraseña, 13);
    // asignacion de rol
    const asignarRol = await Rol.findOne({ nombre: "doctor" });
    // se crea una nueva instancia del modelo usuario
    const user = new Doctor({
      ...userData,
      contraseña: hashedPassword,
      rolReferencia: asignarRol._id,
    });

    // se guarda el nuevo usuario en la base de datos
    await user.save();

    // convertimos el documento mongoose a un objeto plano
    const userResponse = user.toObject();
    // se elimina la contraseña por seguridad
    delete userResponse.contraseña;

    // genreamos un token JWT para el usuario
    const token = this.generarToken(user);
    // retornamos el usuario (sin contraseña) y su token
    return { usuario: userResponse, token };
  }

  // funcion para creacion de pacientes
  async registrarPacS(userData) {

    // buscamos si los datos existen en la base de dato
    const existInUser = await Usuario.findOne({
      email: userData.email
    });
  
    // si encuentra email y nombre dentro de la base de datos me marca el error
    if (existInUser) {
      throw new Error("Usuario o Email ya existe");
    }

    // encriptamiento de la contraseña
    const hashedPassword = await bcrypt.hash(userData.contraseña, 13);
    // asignacion de rol
    const asignarRol = await Rol.findOne({ nombre: "paciente" });
    // se crea una nueva instancia del modelo usuario
    const user = new Paciente({
      ...userData,
      contraseña: hashedPassword,
      rolReferencia: asignarRol._id,
    });

    // se guarda el nuevo usuario en la base de datos
    await user.save();

    // convertimos el documento mongoose a un objeto plano
    const userResponse = user.toObject();
    // se elimina la contraseña por seguridad
    delete userResponse.contraseña;

    // genreamos un token JWT para el usuario
    const token = this.generarToken(user);
    // retornamos el usuario (sin contraseña) y su token
    return { usuario: userResponse, token };
  }

  // funcion para creacion de asistente
  async registrarAsisS(userData, idDoctor) {
    // buscamos si los datos existen en la base de datos
    const existInUser = await Usuario.findOne({
      email: userData.email,
    });

    // si encuentra email y nombre dentro de la base de datos me marca el error
    if (existInUser) {
      throw new Error("Usuario o Email ya existe");
    }

    // encriptamiento de la contraseña
    const hashedPassword = await bcrypt.hash(userData.contraseña, 13);
    // asignacion de rol
    const asignarRol = await Rol.findOne({ nombre: "asistente" });
    // se crea una nueva instancia del modelo usuario
    const user = new Asistente({
      ...userData,
      contraseña: hashedPassword,
      rolReferencia: asignarRol._id,
      doctorId: idDoctor,
    });

    // se guarda el nuevo usuario en la base de datos
    await user.save();

    // convertimos el documento mongoose a un objeto plano
    const userResponse = user.toObject();
    // se elimina la contraseña por seguridad
    delete userResponse.contraseña;

    // genreamos un token JWT para el usuario
    const token = this.generarToken(user);
    // retornamos el usuario (sin contraseña) y su token
    return { usuario: userResponse, token };
  }

  async ingresarS(email, contraseña) {
    // buscar un usuario por email
    const user = await Usuario.findOne({ email });
    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    // verificar si la contraseña es correcta
    const isValidPassword = await bcrypt.compare(contraseña, user.contraseña);

    if (!isValidPassword) {
      throw new Error("Email o contraseña incorrecta");
    }

    // convertimos el ususario a texto plano  y eliminamos la contraseña
    const userResponse = user.toObject();
    delete userResponse.contraseña;

    const token = this.generarToken(user);
    return { user: userResponse, token };
  }

  // funcion para crear token JWT s
  generarToken(user) {
    // creamos un token que incluye ek id y el rol del usuario
    return jwt.sign(
      {
        id2: user.id,
        id: user._id,
        rolReferencia: user.rolReferencia,
        tipoUsuario: user.tipoUsuario, 
        // permiso: user.rol.permiso.map(p=>p.name)
      },
      // usamos la clave secreta .env
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
  }
}

export default new AuthService();
