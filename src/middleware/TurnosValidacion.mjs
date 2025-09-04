import { body } from 'express-validator';

export const validarTurno = [
    body('fecha')
        .notEmpty().withMessage('La fecha es requerida.')
        .isDate().withMessage('La fecha debe ser una fecha válida.'),
    body('hora')
        .notEmpty().withMessage('La hora es requerida.')
        .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage('El formato de la hora debe ser HH:MM.'),
];

export const validarEdicionDeTurnos = [
    // Estos campos son opcionales en la creacion, pero deben ser validados al completarlos
    body('pacienteNombre').notEmpty().withMessage('El nombre del paciente es requerido.'),
    body('pacienteApellido').notEmpty().withMessage('El apellido del paciente es requerido.'),
    body('numeroOS')
        .notEmpty().withMessage('El número de obra social es requerido.')
        .isNumeric().withMessage('El número de obra social debe ser un número.'),
    body('dni')
        .notEmpty().withMessage('El DNI es requerido.')
        .isNumeric().withMessage('El DNI debe ser un número.'),
]