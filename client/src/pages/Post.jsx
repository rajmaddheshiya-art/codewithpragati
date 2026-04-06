import axios from "axios"
import React, { useContext, useState } from "react"
import { dataContext } from "../useContext/useContext"
import { useDispatch, useSelector } from "react-redux"
import { setUserData } from "../redux/userSlice"

function Post() {
    let [post, setPost] = useState("")
    let { serverUrl } = useContext(dataContext)
    let dispatch = useDispatch()

    const postAPI = async (e) => {
        e.preventDefault()
        setPost("")
        try {
            let res = await axios.post(`${serverUrl}/post`, {
                post
            }, { withCredentials: true })
            dispatch(setUserData(res.data))
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="postDiv">


           
        </div>
    )
}

export default Post