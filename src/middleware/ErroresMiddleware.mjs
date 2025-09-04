import { validationResult } from "express-validator"; 

// validacionErrores 
export const validacionErrores = (req, res, next) => {

  // obtiene los errores de validación de la solicitud (req).
  const errores = validationResult(req);
  // si el objeto `errores` no está vacio, significa que se han encontrado uno o más errores de validación.
  if (!errores.isEmpty()) {
    // envia respuesta de estado 400 (Bad Request) al cliente.
    // el cuerpo de la respuesta es un JSON que detalla los errores.
    return res.status(400).json({
      status: "error", // Indica que la operación resultó en un error.
      message: "Validacion fallida", // Mensaje general que describe la naturaleza del error.
      errores: errores.array().map((error) => ({
        // Mapea el array de errores de `express-validator` a un formato más limpio y legible.
        campo: error.path,    // Identifica el campo del formulario o JSON donde se produjo el error.
        mensaje: error.msg,   // El mensaje de error especifico para ese campo, definido en las reglas de validacion.
      })),
    });
  }
  next();
};
