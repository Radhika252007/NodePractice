import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const server = http.createServer((req,res)=>{
    switch(req.url){
        case '/': res.end("Hellp from Main Page") 
                break;
        case '/about': res.end("Hello from about Page")
                break;
        case '/services': res.end("Helo from Services Page")
                break;
        case '/blog': res.end("Hello from Blog Services")
                break;
        default: res.end("404 Page not found");
    }

});

const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})
