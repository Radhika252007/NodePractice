import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.statusCode = 200;
        res.end("Welcome to Home Page");
    }
    else if(req.url === '/about'){
        res.statusCode = 200;
        res.end("Welcome to about page");
    }
    else if(req.url==='/contact'){
        res.statusCode = 200;
        res.end("Welcome to contact page");
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

