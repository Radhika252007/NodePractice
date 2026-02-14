import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const server = http.createServer((req,res)=>{
    let data;
    if(req.url==='/date'){
        data =  new Date().toLocaleDateString();
        res.statusCode = 200;
        res.end(data);
    }
    else if(req.url==='/time'){
        data = new Date().toLocaleTimeString('en-IN');
        res.statusCode = 200;
        res.end(data);
    }
    else if(req.url==='/datetime'){
        data = new Date().toLocaleString('en-IN');
        res.statusCode = 200;
        res.end(data);
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});

