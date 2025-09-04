// script para crear roles y permisos 
import mongoose from "mongoose";
import { connectDB } from "../config/dbConfig.mjs";
import { Turno } from '../models/TurnosModel.mjs';

// id de doctor válido de tu base de datos
const doctorId = "68b7f27a261e352151e614ab"; 

const turnosIniciales = [
    { 
        fecha: new Date("2025-09-01T09:00:00Z"),
        hora: "09:00",
        duracion: "60",
        idDoctor: doctorId
    },
    { 
        fecha: new Date("2025-09-01T09:30:00Z"),
        hora: "10:00",
        duracion: "60",
        idDoctor: doctorId
    },
    { 
        fecha: new Date("2025-09-02T10:00:00Z"),
        hora: "10:00",
        duracion: "60",
        idDoctor: doctorId
    },
    { 
        fecha: new Date("2025-09-02T11:00:00Z"),
        hora: "11:00",
        duracion: "60",
        idDoctor: doctorId
    },
];

async function initializeTurnos() {
    try {
        await connectDB();
        console.log("✅ Conexión a MongoDB exitosa");

        // Opcional: limpiar la colección antes de cargar
        await Turno.deleteMany({});
        console.log("🧹 Colección de turnos limpiada");

        await Turno.insertMany(turnosIniciales);
        console.log(`✅ ${turnosIniciales.length} turnos iniciales creados exitosamente.`);

    } catch (error) {
        console.error("❌ Error al inicializar los turnos:", error);
    } finally {
        await mongoose.disconnect();
        console.log("🛑 Conexión a la base de datos cerrada");
    }
}

initializeTurnos();