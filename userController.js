import users from "../models/user.js";
import bcrypt from "bcrypt"

export const register=async(req,res)=>{
    const {username,email,password}=req.body;

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser= users({
        username,
        email,
        password : hashedPassword
    });

    await newUser.save();

    return res.status(201).json({status:201,message:"User registered successfully."})

}


export const getUser = async (req,res) =>{
    try {
        const {email} = req.body;
        const user = await User.findOne({email})
        return res.status(200).json({user})


    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async (req,res) =>{
    try {
        const {userId} = req.body
        console.log(userId);
        const {username, email} = req.body
        console.log(username,"username");
        const isExistUser = await User.findByIdAndUpdate( {_id: userId},{ $set: {username, email} }, {new: true}).exec()

        return res.status(200).json({isExistUser, message: "User name updated successfully!"})


    } catch (error) {
        console.log(error);
    }
}

export const updateUser2 = async (req,res) =>{
    try {
        // const {userId} = req.body
        // console.log(userId);
        const {username, email} = req.body
        console.log(username,"username");
        const isExistUser = await User.findOneAndUpdate( {email},{ $set: {username} }, {new: true}).exec()

        return res.status(200).json({isExistUser, message: "User name updated successfully!"})


    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (req,res) => {
    try {
        const {userId} = req.body;
        const deletedUser = await User.findByIdAndDelete({_id : userId}).exec()
        return res.status(204).json({message: "User deleted successfully!"})


    } catch (error) {
        console.log(error);
    }

}





