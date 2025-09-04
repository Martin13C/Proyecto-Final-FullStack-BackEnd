import mongoose from "mongoose";
import { Usuario } from './UsuarioModel.mjs' 

const DoctorSchema = new mongoose.Schema({
  profesion: { type: String, required: true },
  matricula: { type: String, required: true },
  telefono: { type: String, required: true },
  edad: { type: Number },
  sexo: { type: String, enum: ["Masc", "Fem", "Otro"] },
  direccion: { type: String },


//   //  para utiliza funcion de disponibiliada horaria
//   horariosDiponibles: [
//     {
//       fecha: { type: Date, required: true }, //ejmeplo "2025/05/12"
//       rangos: [
//         {
//           inicio: { type: String, required: true }, //ejemplo "09:00"
//           fin: { type: String, required: true }, //ejmplo "12:00"
//           duracion: { type: Number, required: true }, //tiempo de los turnos en minutos ejemplo "30"
//         },
//       ],
//     },
//   ],

});

export const Doctor = Usuario.discriminator("doctor", DoctorSchema)