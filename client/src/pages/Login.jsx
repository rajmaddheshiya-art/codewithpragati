import React, { useContext, useState } from "react"
import { useNavigate } from "react-router";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import axios from "axios";
import { dataContext } from "../useContext/useContext";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";
function Login() {
    let nav = useNavigate()
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("")
    let [err, setErr] = useState()
    let { serverUrl } = useContext(dataContext)
    let dispatch = useDispatch()
    let [loading, setLoading] = useState(false)

    const loginAPI = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErr("")
        try {
            let res = await axios.post(`${serverUrl}/login`,
                {
                    userName,
                    password
                }, { withCredentials: true })
            console.log(res)
            dispatch(setUserData(res.data))
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error.response.data.message)
            setErr(error.response.data.message)
        }
    }



    return (
        <div className="nn">
            <h1 id="title">Login</h1><br />
            <div className="mainDiv">
                <form onSubmit={loginAPI}>


                    <div className="inputDiv">
                        <FaUserAlt id="icon" />
                        <input type="text" name="userName" placeholder="Username" className="input" onChange={(e) => { setUserName(e.target.value) }} /><br />
                    </div>


                    <div className="inputDiv">
                        <TbPasswordFingerprint id="icon" />
                        <input type="text" name="userName" placeholder="Password" className="input" onChange={(e) => { setPassword(e.target.value) }} /><br />
                    </div>
                    <p id="error">{err}</p>
                    <div className="btnDiv">
                        <button className="btn" disabled={loading}>{loading ? "Loading..." : "Login"}</button>
                    </div>
                </form>
            </div>
            <p onClick={() => { nav('/signup') }} id="navLink">Create an account ? <span id="navLinkSpan">Signup</span></p>

        </div>
    );
}

export default Login