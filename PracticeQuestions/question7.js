import http from 'http';
import dotenv from 'dotenv';

dotenv.config();
const userData = {
    "name" : "Radhika",
    "age" : 18,
    "branch" : "CSE"
};
const server = http.createServer((req,res)=>{
    if(req.url==='/user'){
        res.statusCode = 200;
        res.end(JSON.stringify(userData));
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});

