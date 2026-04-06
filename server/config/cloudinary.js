import { v2 as cloudinary } from "cloudinary"
import fs from "fs"


const uploadOnCloudinary = async (path) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET

    })
    try {
        let upload = await cloudinary.uploader.upload(path)
        console.log(upload)
        fs.unlinkSync(path)
        return upload.secure_url
    } catch (error) {
        fs.unlinkSync(path)
        console.log(`Cloudinary error ${error}`)
    }
}

export default uploadOnCloudinary