import http from 'http';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const server = http.createServer((req,res)=>{
    if(req.url==='/readfile'){
       fs.readFile('data.txt','utf-8',(err,data)=>{
        if(err){
            console.log(err);
            res.statusCode = 500;
            res.end("Internal Server Error");
        }
        res.statusCode = 200;
        res.end(data);
       });
    }
    else if(req.url === '/createfile'){
        const content = `File Created at ${new Date().toLocaleString()}`;
        fs.writeFile('data.txt',content,(err)=>{
        if(err){
            res.statusCode = 500;
            res.end("Internal Server Error");
        }
        res.statusCode = 201;
        res.end("File Created Successfully");
       });
    }
    else if(req.url==='/appendfile'){
        const data = `\nFile appended at ${new Date().toLocaleString()}`;
        fs.appendFile('data.txt',data,(err)=>{
            if(err){
                res.statusCode = 500;
                res.end("Internal Server Error");
            }
            res.statusCode = 200;
            res.end("File Appended Successfully");
        });
    }
    else if(req.url==='/deletefile'){
        fs.unlink('data.txt',(err)=>{
            if(err){
                res.statusCode = 500;
                res.end("Internal Server Error");
            }
            res.statusCode = 200;
            res.end("File Deleted Successfully");
        });
    }
    else{
        res.statusCode = 404;
        res.end("Page not found");
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});

