import dotenv from 'dotenv';
dotenv.config(); // doble llamado por que se evitan problemas en la coneccion a la base de datos

import mongoose from "mongoose";

const { MONGO_USER, MONGO_PASSWORD, MONGO_DB } =
process.env;
const url = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.gzvrubm.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority&appName=Cluster0`

export async function connectDB() {
  try {
    await mongoose.connect(url);
    console.log("✅ Conexión a MongoDB exitosa");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message);
    process.exit(1); //esto genera que la aplicacion no se inicie si no se conecta a la base 
  }
}
