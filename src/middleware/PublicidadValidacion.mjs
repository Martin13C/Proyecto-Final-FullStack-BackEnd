import { body } from 'express-validator';

export const validarPublicidad = () => [
    body('titulo')
        .notEmpty().withMessage('El título es requerido.')
        .isString({min: 10, max: 30 }).withMessage('El título debe ser una cadena de texto.'),
    body('descripcion')
        .notEmpty().withMessage('La descripción es requerida.')
        .isString({min: 15, max: 250}).withMessage('La descripción debe ser una cadena de texto.'),
    body('idDoctor')
        .notEmpty().withMessage('El ID del doctor es requerido.')
        .isMongoId().withMessage('El ID del doctor debe ser un ID de MongoDB válido.')
];