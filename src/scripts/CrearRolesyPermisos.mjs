// script para crear roles y permisos
import mongoose from "mongoose";
import { Rol } from "../models/RolModel.mjs";
import { Permiso } from "../models/PermisoModel.mjs";
import { connectDB } from "../config/dbConfig.mjs";
import { Usuario } from "../models/UsuarioModel.mjs";
import { Publicidad } from "../models/PublicidadModel.mjs";
import { Turno } from "../models/TurnosModel.mjs";

const initialPermissions = [
  // permisos para turnos 
  { nombre: "ver_turnos", descripcion: "Permite ver todos los turnos" },
  { nombre: "ver_turno", descripcion: "Permite ver turno especifico" },
  { nombre: "crear_turnos", descripcion: "Permite crear turnos" },
  { nombre: "editar_turnos", descripcion: "Permite editar turnos" },
  { nombre: "eliminar_turno", descripcion: "Permite eliminar turnos" },

// permisos para publicidad 
  { nombre: "ver_publicidad", descripcion: "Permite ver publicidad especifica" },
  { nombre: "ver_publicidades_por_doctor", descripcion: "Permite ver publicidad especifica" },
  { nombre: "ver_publicidades", descripcion: "Permite ver publicidades" },
  { nombre: "crear_publicidad", descripcion: "Permite crear publicidad" },
  { nombre: "editar_publicidad", descripcion: "Permite editar publicidad" },
  { nombre: "eliminar_publicidad", descripcion: "Permite eliminar publicidad" },

// permisos para asistente 
  { nombre: "ver_asistentes", descripcion: "Permite ver todos los asistentes" },
  { nombre: "ver_asistente", descripcion: "Permite ver asistente especifico" },
  { nombre: "crear_asistente", descripcion: "Permite crear asistente" },
  { nombre: "editar_asistente", descripcion: "Permite editar asistente" },
  { nombre: "eliminar_asistente", descripcion: "Permite eliminar asistente" },

  // permisos para paciente
    { nombre: "ver_paciente", descripcion: "Permite editar paciente" },
    { nombre: "editar_paciente", descripcion: "Permite editar paciente" },
    { nombre: "eliminar_paciente", descripcion: "Permite eliminar paciente" },

    // permisos para doctor 
        { nombre: "ver_doctor", descripcion: "Permite ver doctor" },
        { nombre: "editar_doctor", descripcion: "Permite editar doctor" },
        { nombre: "eliminar_doctor", descripcion: "Permite eliminar doctor" },


];

// posibles ideas, ingresar a los turnos por parte del paciente con un tiempo limitado para el mismo cargar sus datos, como asi tambien cargar los token de atencion que son generados por otra app 
const initialRoles = [
  {
    nombre: "paciente",
    descripcion: "Paciente con permisos básicos",
    permiso: ["ver_publicidades","ver_turno","ver_paciente","editar_paciente","eliminar_paciente"],
  },
  {
    nombre: "asistente",
    descripcion: "Asistente con permisos intermedios",
    permiso: ["crear_turnos", "editar_turnos","ver_turnos","ver_turno","ver_publicidad","ver_publicidades","crear_publicidad","editar_publicidad","eliminar_publicidad","ver_asistente","editar_asistente","eliminar_asistente","ver_doctor","ver_publicidades_por_doctor"],
  },
  {
    nombre: "doctor",
    descripcion: "Doctor con todos los permisos",
    permiso: ["crear_turnos", "editar_turnos", "eliminar_turno", "ver_turno","ver_turnos","ver_publicidad","ver_publicidades","crear_publicidad","editar_publicidad","eliminar_publicidad","crear_asistente","ver_asistentes","eliminar_asistente","ver_doctor","editar_doctor","eliminar_doctor","ver_publicidades_por_doctor"],
  },
];

async function initializeRolesAndPermissions() {
  try {
    await connectDB();
    console.log("✅ Conexión a MongoDB exitosa");

    await Permiso.deleteMany({});
    await Rol.deleteMany({});
    await Usuario.deleteMany({});
    await Publicidad.deleteMany({});
    await Turno.deleteMany({});
    

    console.log("🧹 Colecciones limpiadas");

    const createdPermissions = await Permiso.insertMany(initialPermissions);
    console.log("✅ Permisos creados");

    const permisoMap = createdPermissions.reduce((map, permiso) => {
      map[permiso.nombre] = permiso._id;
      return map;
    }, {});

    const rolesToCreate = initialRoles.map((rol) => ({
      nombre: rol.nombre,
      descripcion: rol.descripcion,
      permiso: rol.permiso.map((permNombre) => permisoMap[permNombre]),
    }));

    await Rol.insertMany(rolesToCreate);
    console.log("✅ Roles creados");
  } catch (error) {
    console.error("❌ Error inicializando roles y permisos:", error);
  } finally {
    await mongoose.disconnect();
    console.log("🛑 Conexión cerrada");
  }
}

initializeRolesAndPermissions();
