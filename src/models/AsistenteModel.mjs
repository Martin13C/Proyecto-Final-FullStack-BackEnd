import mongoose from 'mongoose';
import { Usuario } from './UsuarioModel.mjs'
import { Doctor } from "./DoctorModel.mjs"

const AsistenteSchema = new mongoose.Schema ({
    doctorId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "doctor",
        required : true
    } //para saber a que doctor pertenece
});

export const Asistente = Usuario.discriminator ("asistente", AsistenteSchema)