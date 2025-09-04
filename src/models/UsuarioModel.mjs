import mongoose from "mongoose";

// // creacion de constante para poder separar los roles
// const rolOpcion = {
//     discriminatorKey : "rol", //clave que se usara para diferenciar entre doctor-asistente-paciente
//     timestamps : { createdAt : "createdAt", updatedAt : "updatedAt" }
// };

// usuario base para todos los roles
const UsuarioSchema = new mongoose.Schema(
  {
    nombre: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    contraseña: { type: String, require: true }, // se guardara encriptada con bcrypt
    imagen: { type: String, default: null },
    lastLogin: { type: Date, default: null },
    // referencia al sistema de roles y permisos
    rolReferencia: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "rol",
    },
  },
  //  rolOpcion
  {
    discriminatorKey: "tipoUsuario", // define la clave para diferenciar los roles
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
); // cada modelo heredara estos campos

export const Usuario = mongoose.model("usuario", UsuarioSchema);
