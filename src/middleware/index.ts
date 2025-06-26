export const handleInputErrors = (req, res, next) => {
    console.log('Entro al middleware de errores');
    next();
}