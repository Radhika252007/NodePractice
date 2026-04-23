import express from 'express';
import employees from './employees.js';
import dotenv from 'dotenv';
const app = express();

dotenv.config();

app.set('view engine','ejs');
app.set('views','./views');
app.get('/',(req,res)=>{
    res.send("Hello");
});

app.get('/employees',(req,res)=>{
    res.render('employees',{employees,employee: employees[0]});
});




app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server running`);
});