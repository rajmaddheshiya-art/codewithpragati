import express from "express"
import { getAllUsers, getCurrent, login, logOut, post, profileUpdate, signup } from "../controllers/auth.js"
import { isAuth } from "../middleware/isAuth.js"
import { upload } from "../middleware/multer.js"

const authRouter = express.Router()

authRouter.post("/signup",signup)
authRouter.post("/login",login)
authRouter.get("/logout",logOut)


authRouter.get("/current",isAuth,getCurrent)
authRouter.get("/allUsers",isAuth,getAllUsers)

authRouter.post("/profile",isAuth,upload.single("image"),profileUpdate)


authRouter.post("/post",isAuth,post)






export default authRouter