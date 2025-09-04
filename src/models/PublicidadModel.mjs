import mongoose from 'mongoose';

const PublicidadSchema = new mongoose.Schema({
    // contenido de la publicidad
    titulo: { type: String, required: true, trim: true, maxlength: 100 },
    descripcion: { type: String, required: true, trim: true, maxlength: 500 },
    imagenUrl: { type: String, default: null },

    // referencia al doctor al que pertenece
    idDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctor', // modelo al que hace referencia
        required: true
        // cambie la referencia de usurario a doctor 
    },
});

export const Publicidad = mongoose.model('publicidad', PublicidadSchema);