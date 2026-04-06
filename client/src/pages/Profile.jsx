import axios from "axios"
import React, { useContext, useRef, useState } from "react"
import { dataContext } from "../useContext/useContext"
import { useDispatch, useSelector } from "react-redux"
import { setUserData } from "../redux/userSlice"

import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import dp from "../assets/dp.png"
import { useNavigate } from "react-router"
function Profile() {
    let { userData } = useSelector(state => state.user)
    let [name, setName] = useState("")
    let { serverUrl } = useContext(dataContext)
    let dispatch = useDispatch()
    let file = useRef()
    let [frontendImage, setFrontendImage] = useState(userData.image || dp)
    let [backendImage, setBackendImage] = useState("")
    let [loading, setLoading] = useState(false)
    let nav = useNavigate()

    const handlImage = (e) => {
        let file = e.target.files[0]
        setBackendImage(file)
        let image = URL.createObjectURL(file)
        setFrontendImage(image)
    }

    const handlImageAPI = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            let formData = new FormData()
            formData.append("name", name)
            if (backendImage) {
                formData.append("image", backendImage)
            }
            let res = await axios.post(`${serverUrl}/profile`, formData,
                {
                    withCredentials: true,
                    headers:{
                        'Content-Type': 'multipart/form-data',
                    }
                }
            )
            dispatch(setUserData(res.data))
            console.log(res)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.log(error.response.data.message)

        }
    }

    const logoutAPI = async(e)=>{
        try {
            let res = await axios.get(`${serverUrl}/logout`,{withCredentials:true})
            dispatch(setUserData(null))
            console.log(res)
            nav('/login')
        } catch (error) {
            console.log(error.response.data.message)
            
        }
    }

    return (
        <div className="postDiv">

            <div className="profileImageDiv" onClick={(e) => { file.current.click() }}>
                <img id="profileImage" src={frontendImage} />
            </div>


            <div className="post">
                <div className="formDiv">
                    <form id="profileForm" onSubmit={handlImageAPI}>

                        <div id="postInput">
                            <MdOutlineDriveFileRenameOutline id="Proicon" />
                            <input type="text" className="profileDiv" placeholder={userData.name} onChange={(e) => { setName(e.target.value) }} /><br />
                        </div>

                        <div id="postInput" >
                            <FaUserAlt id="Proicon" />
                            <input type="text" className="profileDiv" onChange={(e) => { setPost(e.target.value) }} value={userData.userName} /><br />
                        </div>

                        <div id="postInput" >
                            <MdEmail id="Proicon" />
                            <input type="text" className="profileDiv" placeholder={userData.email} onChange={(e) => { setPost(e.target.value) }} value={userData.email} /><br />
                        </div>
                        <input type="file" ref={file} style={{ display: "none" }} onChange={handlImage} />
                        <div className="proValue">
                            <button id="proSave" disabled={loading}>{loading ? "Saving..." : "Save"}</button>

                        </div>

                        <h3 id="logout" onClick={logoutAPI}>Logout</h3>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile