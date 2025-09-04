import mongoose from "mongoose";
import { connectDB } from "../config/dbConfig.mjs";
import { Publicidad } from '../models/PublicidadModel.mjs'; 

// ID de un doctor valido de tu base de datos para referenciarlo
const doctorId = "68b003a8099b04e6afd34273"; 

const publicidadesIniciales = [
    { 
        titulo: "¡Nuevo horario de consultas!",
        descripcion: "Atendemos de lunes a viernes de 9 a 18 horas. ¡Pide tu cita hoy mismo!",
        imagenUrl: "https://ejemplo.com/imagen1.jpg",
        idDoctor: doctorId
    },
    { 
        titulo: "Medicina Deportiva",
        descripcion: "Consulta sobre lesiones deportivas, planes de entrenamiento y nutrición para atletas.",
        imagenUrl: "https://ejemplo.com/imagen2.png",
        idDoctor: doctorId
    },
];

async function initializePublicidades() {
    try {
        await connectDB();
        console.log("✅ Conexión a MongoDB exitosa");

        // Opcional: limpiar la colección antes de cargar
        await Publicidad.deleteMany({});
        console.log("🧹 Colección de publicidades limpiada");

        await Publicidad.insertMany(publicidadesIniciales);
        console.log(`✅ ${publicidadesIniciales.length} publicidades iniciales creadas exitosamente.`);

    } catch (error) {
        console.error("❌ Error al inicializar las publicidades:", error);
    } finally {
        await mongoose.disconnect();
        console.log("🛑 Conexión a la base de datos cerrada");
    }
}

initializePublicidades();