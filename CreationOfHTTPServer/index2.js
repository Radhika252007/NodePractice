import http from 'http';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const server = http.createServer((req,res)=>{
    if(req.url==='/readData'){
        fs.readFile('data.txt','utf-8',(err,data)=>{
            if(err){
                res.statusCode = 500;
                res.end("Internal Server Error");
            }
            res.statusCode = 200;
            res.end(data);
        });
    }
    else if(req.url==='/appendData'){
        const data = `\nLogged in File with ${req.url} at Time ${new Date()}\n`;
        fs.appendFile('data.txt',data,(err)=>{
            if(err){
                console.log(err);
                res.statusCode = 500;
                res.end("Internal Error");
            }
            res.statusCode = 200;
            res.end("Appended File Successfully");
        });
    }
    else if(req.url === '/createFile'){
        const content = "Hello From this File";
        fs.writeFile('newFile.txt',content,(err)=>{
            if(err){
                res.statusCode = 500;
                res.end("Internal Server Error");
            }
            res.statusCode = 201;
            res.end("File Created Successfully");
        })
    }
    else if(req.url==='/deleteFile'){
        fs.unlink('newFile.txt',(err)=>{
            if(err){
                res.statusCode = 500;
                res.end("Internal Server Error");
            }
            res.statusCode = 200;
            res.end("File Deleted Successfully");
        })
    }
    else{
        res.statusCode = 404;
        res.end("Page Not Found");
    }

});

const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})
