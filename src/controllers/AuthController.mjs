// creamos un controlador para autenticacion 
import AuthService from "../service/AuthService.mjs";


// funcion para doctor
export const registroD = async (req, res) => {
    try {
        const result = await AuthService.registrarDocS(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.log('Error en registro: ', error);
        res.status(400).json({ message : error.message})
    }
}

// funcion para paciente 
export const registroP = async (req, res) => {
    try {
        const result = await AuthService.registrarPacS(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.log('Error en registro: ', error);
        res.status(400).json({ message : error.message})
    }
}
// funcion para asistente 
export const registroA = async (req, res) => {
    try {
         // extraemos el id del doctor del objeto req.user
        const idDoctor = req.user.id; 
        const result = await AuthService.registrarAsisS(req.body, idDoctor);
        res.status(201).json(result);
    } catch (error) {
        console.log('Error en registro: ', error);
        res.status(400).json({ message : error.message})
    }
}


export const ingreso = async (req, res) => {
    try {
        const { email, contraseña } = req.body;
        const result = await AuthService.ingresarS(email,contraseña);
        res.json(result);
    } catch (error) {
        console.log('Error en ingreso: ', error);
        res.status(401).json({ message : error.message })
    }
}
