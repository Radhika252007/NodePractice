import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const server = http.createServer((req,res)=>{
    if(req.url==='/html'){
        res.writeHead(200, {
            "Content-Type" : "text/html"
        });
        res.end(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Hello There</p>
</body>
</html>
            `);
    }
    else if(req.url==='/text'){
        res.writeHead(200,{
            "Content-Type" : "text/plain"
        });
        res.end("Hello There");
    }
    else{
    res.statusCode = 404;
    res.end("Page Not Found");
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});

