import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

const app = express();
app.use(express.json());

app.get('/api',(req,res)=>{
    res.status(200).json({message : "Hello World"})
});
app.get('/img1',(req,res)=>{
    const filePath = path.join(__dirname,'public','images','9383007.jpg');
    res.sendFile(filePath);
})

app.get('/stream_readfile',(req,res)=>{
    const readfilestream = fs.createReadStream('file.txt','utf-8');
    readfilestream.on('error',(err)=>{
        res.send("Something went wrong when processing the file");
    });
    res.send
})
app.use(express.static('public'));
const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`Server on Port ${PORT}`);
});