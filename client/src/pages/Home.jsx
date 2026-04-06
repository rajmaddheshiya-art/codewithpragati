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
function Home() {

    let { otherUserData } = useSelector(state => state.user)
    let { userData } = useSelector(state => state.user)
    let nav = useNavigate()


    return (
        <div className="HomeDiv">
            <Header />
            <Title />
            <Project />
            <div className="logDiv">
                {
                    !userData && <div className="coverLogin" onClick={() => { nav('/login') }}></div>

                }

                {
                    !userData && <img src={log} id="logAD" />
                }
            </div>



            <Bottom />

        </div>
    )
}

export default Home