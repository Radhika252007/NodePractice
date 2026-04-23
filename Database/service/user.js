import User from "../model/userModel.js";

const createUser = async(userData) =>{
    const {username, email, password, address, phoneNo} = userData;
    if(!username || !email || !password || !address || !phoneNo){
        throw new Error("Incomplete Data Found",400);
    }
    const existingUser = await User.findOne({email});
    if(existingUser){
        throw new Error("User with this email exists",400);
    }
    try{
        const newUser = await User.create({
            username, 
            email,
            password,
            address,
            phoneNo,
            isActive: true
        });

        return newUser;
    }
    catch(err){
        throw new Error("Internal Server Error",500);
    }
}

export {
    createUser
};