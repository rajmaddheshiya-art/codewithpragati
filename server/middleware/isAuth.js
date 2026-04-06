import jwt from "jsonwebtoken"

export const isAuth = async (req, res, next) => {
    try {
        let token = await req.cookies.token;
        if (!token) {
            return res.status(400).json({ message: "Token not found" })
        }
        let decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded) {
            return res.status(400).json({ message: "Token not verify" })
        }

        req.userId = decoded.userId
        next()
    } catch (error) {
        return res.status(500).json({ message: `isAuth error ${error}` })

    }
}