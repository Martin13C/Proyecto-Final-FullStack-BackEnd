import mongoose from "mongoose";

// estructura de los turnos
const TurnoSchema = new mongoose.Schema({
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
    duracion: {  type: String, required: true },
    pacienteNombre: { type: String, required: false },
    pacienteApellido: { type: String, required: false },
    edadPaciente: { type: Number, required: false },
    descripcion: { type: String, required: false },

    // datos que seran cargados por el paciente 
    numeroOS : { type: Number, required : false },
    dni : { type: Number, required : false },
    tokensPaciente: [String], //array para que el paceinte cargue varios tokens de una sola ves
    
    // referencia al doctor
    idDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "doctor", // El nombre del modelo al que hace referencia
        required: true
    }
    // cambie docotor a minuscula-Doctor

});

export const Turno = mongoose.model("turno", TurnoSchema);