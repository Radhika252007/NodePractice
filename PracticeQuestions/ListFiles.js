import http from 'http';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const server = http.createServer((req,res)=>{
    if(req.url==='/files'){
        fs.readdir('./',(err,files)=>{
            if(err){
                res.statusCode = 500;
                res.end("Internal Server Error");
            }
            res.statusCode = 200;
            res.end(JSON.stringify(files));
        })
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});

