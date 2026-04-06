import React, { useState } from "react";
import Left from "./Left";
import { RiMenuAddFill } from "react-icons/ri";
import Bottom from "./Bottom";
import { useSelector } from "react-redux";
import Header from "./Header";
import Title from "./Title";
import Project from "./Project";
import log from "../assets/log.png"
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { SiGooglemarketingplatform } from "react-icons/si";
import {motion} from "framer-motion"
import { GrClose } from "react-icons/gr";
function Home() {

    let { otherUserData } = useSelector(state => state.user)
    let { userData } = useSelector(state => state.user)
    let nav = useNavigate()
    let [show, setShow]=useState(false)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setShow(true)
        },5000)
        return  ()=> clearTimeout(timer)
    },[])


    return (
        <div className="HomeDiv">
            <Header />
            <Title />
            <Project />
            <div className="logDiv">

                {
                    show && <div className="digital">
                        <GrClose id="cut" onClick={()=>{setShow(false)}}/>
                        <motion.p
                        animate={{rotate: 360}}
                        transition={{ duration:1,repeat:Infinity}}
                        ><SiGooglemarketingplatform id="digitalIcon"/></motion.p>
                        <h1 id="digital"><span style={{color:"rgb(255, 115, 0)"}}>Digital Identity</span> aur QR Marketing se apna <span style={{color:"rgb(255, 115, 0)"}}>business grow </span>karein</h1>
                    </div>
                }
                {/* {
                    !userData && <div className="coverLogin" onClick={() => { nav('/login') }}></div>

                }

                {
                    !userData && <img src={log} id="logAD" />
                } */}
            </div>



            <Bottom />

        </div>
    )
}

export default Home