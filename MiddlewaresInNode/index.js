//Three Types of Middlewares
// Application level, Route level,Route Specific, Third party , Error Handler,Custom Middlewares, Built-In 

import express from 'express';
import { logger } from './middlewares/logger.js';

const app = express();
app.get('/',logger,(req,res)=>{
    console.log("Hello There");
    res.status(200).json({message: "Hello There"});
})

app.listen(3000,()=>{
    console.log("Server running on Port 3000");
})
