const { constants } = require('buffer');
const greet = require('./data.js');
const fs = require('fs');
const fsPromises = require('fs/promises');



//Synchronous Version
try{
const text = fs.readFileSync('file.txt','utf-8');
console.log(text);
}
catch(error){
    console.log(error);
};


// Asynchronous Version
// using fs only
(async ()=>{
    try{
        const data = await fs.readFile('file.txt','utf-8');
        if(data){
            console.log(data);
        }       
    }
    catch(err){
        console.log(err);
    }
})();
     

//using fs/promises
async function getData() {
    try{
        const data = await fsPromises.readFile('file.txt','utf-8');
        if(data){
            console.log(data);
        }
        else{
            console.log("Something went wrong");
        }
    }
    catch(err){
        console.log(err);
    }
}
  
getData()


// File Write

try{
    const newData = "Hello, I am Radhika";
    fs.writeFile('file.txt',newData,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("File written Successfully");
        }
    })
}
catch(err){
    console.log(err);
}


//Append A File
try{
    fs.appendFile('file.txt',"I am studying Node.js",(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("File Appended Successfully");
        }
    })
}
catch(err){
    console.log(err);
}

//Check if File Exists
try{
    const file = 'package.json';
    fs.access(file,constants.F_OK,(err)=>{
        console.log(`${file}: ${(err ? 'does not exists' : 'exists')}`);
    })
}
catch(err){
    console.log(err);
}

// Rename File
try{
    fs.rename('newFile.txt','file.txt',(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("File Renamed Successfully");
        }
    })
}
catch(err){
    console.log(err);
}

try{
    const file = 'unwanted.txt'
    fs.access(file,constants.F_OK,(err)=>{
        if(err){
            console.log("File does not Exists");
            return;
        }
    });

    fs.unlink(file,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("File Deleted Successfully");
        }
    });


}
catch(err){
    console.log(err);
}
console.log("Hello, Node.js!",greet("Radhika"));