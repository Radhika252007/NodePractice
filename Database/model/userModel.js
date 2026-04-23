import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username : String,
    email : String,
    address : String,
    phoneNo : Number,
    isActive : Boolean
})

const User = mongoose.model('User',userSchema);
export default User;