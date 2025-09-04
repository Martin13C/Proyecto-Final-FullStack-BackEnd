import { body } from 'express-validator';

export const validarAsistente = () => [
    // Validaciones del Usuario base
    body('nombre')
        .notEmpty().withMessage('El nombre es requerido.')
        .isString().withMessage('El nombre debe ser una cadena de texto.')
        .isLength({ min: 3, max: 90 }).withMessage('El nombre debe tener entre 3 y 90 caracteres.'),

    body('email')
        .notEmpty().withMessage('El email es requerido.')
        .isEmail().withMessage('Debe ser un email válido.')
        .isLength({ min: 8, max: 90 }).withMessage('El email debe tener entre 8 y 90 caracteres.'),

    // body('contraseña')
    //     .notEmpty().withMessage('La contraseña es requerida.')
    //     .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres.'),
    

        // este tipo de modelo no necesita mas validacion ya que cuenta con el id del doctor 
];