import http from 'http';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const server = http.createServer((req,res)=>{
    const a = 10;
    const b = 5;
    if(req.url==='/add'){
       res.statusCode = 200;
       res.end((a+b).toString());
    }
    else if(req.url === '/subtract'){
        res.statusCode = 200;
       res.end((a-b).toString());
    }
    else if(req.url==='/multiply'){
       res.statusCode = 200;
        res.end((a*b).toString());
    }
    else if(req.url==='/divide'){
        if(b==0){
            res.statusCode = 400;
            res.end("Cannot Divide by zero");
        }
    res.statusCode = 200;
        res.end((a/b).toString());
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

