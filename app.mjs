import dotenv from 'dotenv';
dotenv.config(); //carga las variables de entorno

import express from 'express'
import cors from 'cors'  //peticiones desdesde ip diferentes
import morgan from 'morgan' //para mostrar peticiones y tiempo de respuesta
import {connectDB} from './src/config/dbConfig.mjs'
import path from 'path'
import { fileURLToPath } from "url"; 
import eleccionRutes from './src/routes/EleccionRutes.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const PORT = process.env.PORT || 5000;

// Middlewares globales
// =============================================================================
app.use(cors()); // Habilita CORS para que el frontend pueda consumir tu API
app.use(express.json());// midleware para pasear el cuerpo de las solicitudes en formato json 
app.use(express.urlencoded({ extended: true }));// midleware para pasear cuerpo de las solicitudes enviadas desde el formilario HTML
app.use(morgan("dev")); // Logs HTTP

// llamada a la funcion de coneccion 
connectDB ();

// rutas del back 
app.use("/api", eleccionRutes);

app.get('/', (req, res) => {
  res.send('API Backend funcionando');
});

// ruta fallback para rutas no encontradas
app.use((req,res) => {
    res.status(404).json({ mensaje: "Ruta no encontrada"})
});

// errores globales
app.use((err, req, res, next) => {
    console.error("error no manejado:",err.stack)
    res.status(500).json({ mensaje: "Error interno del servidor"})
});

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
})