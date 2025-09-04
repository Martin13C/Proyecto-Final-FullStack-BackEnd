import mongoose from 'mongoose'
import { Permiso } from './PermisoModel.mjs'

const rolSchema = new mongoose .Schema ({
    nombre: {
        type: String,
        required: true,
        unique : true
    },
    descripcion: 
    {
        type: String,
        required: true
    },
    permiso: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'permiso'
    }]
});

export const Rol = mongoose.model('rol',rolSchema)
