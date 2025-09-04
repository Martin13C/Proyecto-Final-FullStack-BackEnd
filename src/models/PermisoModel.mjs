import mongoose from 'mongoose'

const permisoSchema = new mongoose .Schema ({
    nombre: {
        type: String,
        required: true,
        unique : true
    },
    descripcion: 
    {
        type: String,
        required: true
    }
});

export const Permiso = mongoose.model('permiso',permisoSchema)
