import express from 'express';
import connectDB from './database/myDB.js';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';

dotenv.config();

const app = express();
connectDB();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello There");
});
app.use('/api/user',userRoutes);

app.listen(process.env.PORT||3000,()=>{
    console.log('Server running');
})