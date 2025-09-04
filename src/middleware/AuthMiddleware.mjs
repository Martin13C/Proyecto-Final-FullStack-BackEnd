import jwt from 'jsonwebtoken'
import { Usuario } from '../models/UsuarioModel.mjs'
// creamos middleware 

export const autenticacionToken =  (req, res, next) => {

    // obtenemos el headers de la autorizacion 
    const authHeader = req.headers ['authorization'];
    // extraemos el token del headers (formato "Bearer <token>") 
    const token = authHeader && authHeader.split(' ')[1];

    // si no hay token devolcemos erro 401 (no autorizado) 
    if (!token) {
        return res.status(401).json({ message : 'Token no proporcionado'})
    }

    try {
        // verificamos el token usando la clave secreta
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // guardamos la informacion del usuario decodificada en el objeto request 
        req.user = decoded
        // continuamos con la siguiente funcion 
        next();
    } catch (error) {
        // si el token es invalido 
        return res.status(403).json({ message : 'Token invalido' })
        
    }
}

export const hasPermission = (requiredPermission) => {
    return async (req, res, next) => {
        try {
        
            if (!req.user) {
                return res.status(401).json ({ message : 'No autorizado'})
            }

            const user = await Usuario.findById(req.user.id)
            .populate({
                path: 'rolReferencia',
                populate : {
                    path: 'permiso'
                }
            });

            const hasPermission = user.rolReferencia.permiso.some(
                permiso => permiso.nombre == requiredPermission
            );

            if (!hasPermission){
                return res.status(403).json ({
                    message : 'No tiene permiso para realizar esta accion'
                });
            }

            next()
        } catch (error) {
             // CORRECCIÓN 3: Maneja el error apropiadamente
            console.error('Error en el middleware hasPermission:', error);
            // Llama a next(error) para que Express maneje el error
            // o devuelve una respuesta de error
            res.status(500).json({ message: 'Error interno del servidor.' });
        }
    }
}