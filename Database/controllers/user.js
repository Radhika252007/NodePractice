import { createUser as createUserService } from "../service/user.js";

export const createUser = async (req,res)=>{
    const {username, email, password, address, phoneNo} = req.body;
    const userData = {
        username,
        email,
        password,
        address,
        phoneNo,
        isActive : true
    }
try{
    const newUser = await createUserService(userData);
    return res.status(201).json({message: "User Created Successfully", newUser});
}
catch(err){
    return res.status(err.status).json({message : err.message});
}
}