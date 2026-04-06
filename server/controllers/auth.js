import User from "../models/userSchema.js";
import bcrypt from "bcrypt"
import genToken from "./token.js";
import uploadOnCloudinary from "../config/cloudinary.js";
export const signup = async (req, res) => {
    try {
        const { name, userName, email, password, post } = req.body;

        if (!name || !userName || !email || !password) {
            return res.status(400).json({ message: "Please fill all details" })
        }

        const checkUserName = await User.findOne({ userName })

        if (checkUserName) {
            return res.status(400).json({ message: "UserName already register" })
        }

        const checkEmail = await User.findOne({ email })

        if (checkEmail) {
            return res.status(400).json({ message: "Email already register" })
        }

        const hashPass = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            userName,
            email,
            password: hashPass
        })

        const token = await genToken(user._id)

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            secure: false,
            sameSite: "strict"
        })

        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({ message: `Signup error ${error}` })
    }
}



export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;

        if (!userName || !password) {
            return res.status(400).json({ message: "Please fill all details" })
        }

        const checkUserName = await User.findOne({ userName })

        if (!checkUserName) {
            return res.status(400).json({ message: "UserName not exist" })
        }


        const checkPass = await bcrypt.compare(password, checkUserName.password)

        if (!checkPass) {
            return res.status(400).json({ message: "Incorrect Password" })
        }

        const token = await genToken(checkUserName._id)

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            secure: false,
            sameSite: "strict"
        })

        return res.status(201).json(checkUserName)
    } catch (error) {
        return res.status(500).json({ message: `Login error ${error}` })
    }
}

export const logOut = async (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({ message: `Log out successfull` })
    } catch (error) {
        return res.status(500).json({ message: `Login error ${error}` })
    }
}


export const getCurrent = async (req, res) => {
    try {
        let userId = req.userId;
        if (!userId) {
            return res.status(400).json({ message: "userId not found" })
        }

        const user = await User.findById(userId)
        if (!user) {
            return res.status(400).json({ message: "user not found" })
        }

        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({ message: `Get current user error ${error}` })
    }
}


export const getAllUsers = async (req, res) => {
    try {
        let user = await User.find({
            _id: { $ne: req.userId }
        }).select("-password")
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ message: `Get all users error ${error}` })
    }
}

export const post = async (req, res) => {
    try {
        const { post } = req.body;
        const userId = req.userId;

        console.log("User ID received:", userId);
        if (!post) {
            return res.status(400).json({ message: "Error" })
        }
        const savePost = await User.findByIdAndUpdate(userId,
            { $push: { post: post } },
            { new: true }
        )

        if (!savePost) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(201).json({
            user: savePost
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const profileUpdate = async(req,res)=>{
    try {
        const {name} = req.body;
        let userId = req.userId

        console.log("1. UserID Check:", userId);
        console.log("2. File Check:", req.file);
        
        let image = null;
        if(req.file){
            image = await uploadOnCloudinary(req.file.path)
        }
        
        const user = await User.findByIdAndUpdate(userId,{
            name,
            image
        },{new:true})
        
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: "Internal Profile Server Error" });
    }
}