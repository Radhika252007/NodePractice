export const logger = (req, res, next) =>{
    console.log(`Request at Method ${req.method} at ${new Date().toLocaleTimeString()}`);
    next();
}