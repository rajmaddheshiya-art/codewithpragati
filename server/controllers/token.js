import jwt from "jsonwebtoken"

const genToken = (userId)=>{
    try {
        let token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"})
        return token
    } catch (error) {
        return res.status(500).json({ message: `Gen token error ${error}`})
    }
}

export default genToken