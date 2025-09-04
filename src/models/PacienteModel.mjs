import mongoose from "mongoose";
import { Usuario } from './UsuarioModel.mjs'

const PacienteSchema = new mongoose.Schema({
    telefono : { type : String, required : true },
    edad : { type : Number, required : true },  
})

export const Paciente = Usuario.discriminator("paciente", PacienteSchema)