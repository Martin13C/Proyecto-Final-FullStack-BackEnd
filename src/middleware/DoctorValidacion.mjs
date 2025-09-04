import { body } from 'express-validator';

export const validarDoctor = () => [
    // Validaciones del Usuario base
    body('nombre')
        .notEmpty().withMessage('El nombre es requerido.')
        .isString().withMessage('El nombre debe ser una cadena de texto.')
        .isLength({ min: 3, max: 90 }).withMessage('El nombre debe tener entre 3 y 90 caracteres.'),

    body('email')
        .notEmpty().withMessage('El email es requerido.')
        .isEmail().withMessage('Debe ser un email válido.')
        .isLength({ min: 8, max: 90 }).withMessage('El email debe tener entre 8 y 90 caracteres.'),

    body('contraseña')
        .notEmpty().withMessage('La contraseña es requerida.')
        .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres.'),
    
    // Validaciones específicas del Doctor
    body('profesion')
        .notEmpty().withMessage('La profesión es requerida.')
        .isString().withMessage('La profesión debe ser una cadena de texto.')
        .isLength({ min: 3, max: 40 }).withMessage('La profesión debe tener entre 3 y 40 caracteres.'),

    body('matricula')
        .notEmpty().withMessage('La matrícula es requerida.')
        .isString().withMessage('La matrícula debe ser una cadena de texto.')
        .isLength({ min: 5, max: 15 }).withMessage('La matrícula debe tener entre 5 y 15 caracteres.'),

    body('telefono')
        .notEmpty().withMessage('El teléfono es requerido.')
        .isString().withMessage('El teléfono debe ser una cadena de texto.')
        .isLength({ min: 10, max: 13 }).withMessage('El teléfono debe tener entre 10 y 13 caracteres.'),

    body('direccion')
        .optional()
        .isString().withMessage('La dirección debe ser una cadena de texto.')
        .isLength({ min: 6, max: 90 }).withMessage('La dirección debe tener entre 6 y 90 caracteres.'),

    body('edad')
        .optional()
        .isInt({ min: 18, max: 110 }).withMessage('La edad debe ser un número entero válido entre 18 y 110.'),

    body('sexo')
        .optional()
        .isIn(['Masc', 'Fem', 'Otro']).withMessage('El sexo debe ser Masc, Fem u Otro.')
];

export const validarDoctorEdicion = () => [
    // Validaciones del Usuario base
    body('nombre')
        .notEmpty().withMessage('El nombre es requerido.')
        .isString().withMessage('El nombre debe ser una cadena de texto.')
        .isLength({ min: 3, max: 90 }).withMessage('El nombre debe tener entre 3 y 90 caracteres.'),

    body('email')
        .notEmpty().withMessage('El email es requerido.')
        .isEmail().withMessage('Debe ser un email válido.')
        .isLength({ min: 8, max: 90 }).withMessage('El email debe tener entre 8 y 90 caracteres.'),

        // quitamos esta validacion para permitir cambios aprciales
    // body('contraseña')
    //     .notEmpty().withMessage('La contraseña es requerida.')
    //     .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres.'),
    
    // Validaciones específicas del Doctor
    body('profesion')
        .notEmpty().withMessage('La profesión es requerida.')
        .isString().withMessage('La profesión debe ser una cadena de texto.')
        .isLength({ min: 3, max: 40 }).withMessage('La profesión debe tener entre 3 y 40 caracteres.'),

    body('matricula')
        .notEmpty().withMessage('La matrícula es requerida.')
        .isString().withMessage('La matrícula debe ser una cadena de texto.')
        .isLength({ min: 5, max: 15 }).withMessage('La matrícula debe tener entre 5 y 15 caracteres.'),

    body('telefono')
        .notEmpty().withMessage('El teléfono es requerido.')
        .isString().withMessage('El teléfono debe ser una cadena de texto.')
        .isLength({ min: 10, max: 13 }).withMessage('El teléfono debe tener entre 10 y 13 caracteres.'),

    body('direccion')
        .optional()
        .isString().withMessage('La dirección debe ser una cadena de texto.')
        .isLength({ min: 6, max: 90 }).withMessage('La dirección debe tener entre 6 y 90 caracteres.'),

    body('edad')
        .optional()
        .isInt({ min: 18, max: 110 }).withMessage('La edad debe ser un número entero válido entre 18 y 110.'),

    body('sexo')
        .optional()
        .isIn(['Masc', 'Fem', 'Otro']).withMessage('El sexo debe ser Masc, Fem u Otro.')
];