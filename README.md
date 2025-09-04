# Proyecto Final, RedSocial y Publicitaria Medica

Este proyecto fue desarrollado con la intencion de tener una plataforma donde se puedan conectar profesionales con sus "Asistentes/secretarias" para rener control simultaneo de sus turnos como asi tambie de poder ser una red publicitaria.

# Tecnologias usadas:

#### DB-Base de datos

MongoDB Atlas y Compass

#### Back-End

Node.js
Express
Express-Validators
Dotev
Morgan

#### Front-End

## Rutas protegidas del back

#### Asistentes

http://localhost:api/asitente/--Todas son Rutas protegidas
GET: http://localhost:api/asitente/todos
POST: http://localhost:api/asitente/crear
GET: http://localhost:api/asitente/editar
PUT: http://localhost:api/asitente/editar
DELETE: http://localhost:api/asitente/eliminar

#### Auth

http://localhost:api/auth/--Una unica ruta de ingreso
http://localhost:api/auth/ingreso


#### Doctor/Profesional

http://localhost:api/doctor/--Una unica ruta publica y las demas protegidas
Publica:
http://localhost:api/doctor/crear
Protegidas
GET: http://localhost:api/doctor/editar
PUT: http://localhost:api/doctor/:id/editar
DELETE: http://localhost:api/doctor/eliminar

#### Paciente

http://localhost:api/paciente/--Una ruta publica las demas protgidas
POST: http://localhost:api/paciente/crear
GET: http://localhost:api/paciente/editar
PUT: http://localhost:api/paciente/editar

#### Publicidad

http://localhost:api/publicidad/--Todas las rutas protegidas

GET: http://localhost:api/publicidad/todo
GET: http://localhost:api/publicidad/mio
POST: http://localhost:api/publicidad/crear
GET: http://localhost:api/publicidad/:id/editar
PUT: http://localhost:api/publicidad/:id/editar
DELETE: http://localhost:api/publicidad/:id/eliminar

#### Turnos

http://localhost:api/turnos/--Todas las rutas protgidas

GET: http://localhost:api/turnos/
POST: http://localhost:api/turnos/crearnuevo
GET: http://localhost:api/turnos/:id/editar
PUT: http://localhost:api/turnos/:id/editar
DELETE: http://localhost:api/turnos/:id/eliminar
