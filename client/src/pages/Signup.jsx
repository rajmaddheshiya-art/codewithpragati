import React, { useContext, useState } from "react"
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { useNavigate } from "react-router";
import axios from "axios"
import { dataContext } from "../useContext/useContext";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";
function SignUp() {
    let nav = useNavigate()
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    let { serverUrl } = useContext(dataContext)
    let [err, setErr] = useState("")
    let [loading, setLoading] = useState(false)
    let dispatch = useDispatch()

    const signupAIP = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErr("")
        try {
            let res = await axios.post(`${serverUrl}/signup`, {
                name,
                userName,
                email,
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
            <h1 id="title">Create Account</h1><br />
            <div className="mainDiv">
                <form onSubmit={signupAIP}>
                    <div className="inputDiv">
                        <MdOutlineDriveFileRenameOutline id="icon" />
                        <input type="text" name="userName" placeholder="Name" className="input" onChange={(e) => { setName(e.target.value) }} /><br />
                    </div>

                    <div className="inputDiv">
                        <FaUserAlt id="icon" />
                        <input type="text" name="userName" placeholder="Username" className="input" onChange={(e) => { setUserName(e.target.value) }} /><br />
                    </div>

                    <div className="inputDiv">
                        <MdEmail id="icon" />
                        <input type="text" name="userName" placeholder="Email" className="input" onChange={(e) => { setEmail(e.target.value) }} /><br />
                    </div>
                    <div className="inputDiv">
                        <TbPasswordFingerprint id="icon" />
                        <input type="text" name="userName" placeholder="Password" className="input" onChange={(e) => { setPassword(e.target.value) }} /><br />
                    </div>
                    <p id="error">{err}</p>
                    <div className="btnDiv">
                        <button className="btn">{loading ? "Loading..." : "Sign Up"}</button>
                    </div>
                </form>
            </div>
            <p onClick={() => { nav('/login') }} id="navLink">Already have an account ? <span id="navLinkSpan">Login</span></p>

        </div>
    );
}

export default SignUp