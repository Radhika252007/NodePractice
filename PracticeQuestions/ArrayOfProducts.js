import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const products = [
    {
        "product1" : {
            "id" : 2345,
            "name" : "Nike Air Force"
        }
    },
    {
        "product1" : {
            "id" : 2341,
            "name" : "Adidas Sambas"
        }
    }
]
const server = http.createServer((req,res)=>{
    if(req.url==='/products'){
        res.statusCode = 200;
        res.end(products);
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

