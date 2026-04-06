import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import Post from "./Post";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import Explore from "./Explore";
import dp from "../assets/dp.png"
import Search from "./Search";
import pLog from "../assets/pLog.png"
import { GrClose } from "react-icons/gr";

function Bottom() {
    let nav = useNavigate()
    let { userData } = useSelector(state => state.user)
    let [post, setPost] = useState(false)
    let [profile, setProfile] = useState(false)
    let [ex, setEx] = useState(false)
    let [search, setSearch] = useState(false)
    let [ad, setAd] = useState(false)
   




    return (
        <div className="bottom">
            {
                ad && <div className="add">
                    <GrClose id="close" onClick={() => { setAd(false) }} />

                    <div className="ads" >
                        <img src={pLog} id="ads" />

                    </div>

                </div>
            }

            {
                profile && <Profile />
            }

            {
                ex && <Explore />
            }

            {
                search && <Search />
            }



            <div className="bottomDiv">
                <IoMdHome className="bottomIcon" />
                <IoSearchSharp  className="bottomIcon" />
                <FaSquarePlus onClick={(prev) => { setAd(prev => !prev) }} className="bottomIcon" />
                <MdExplore className="bottomIcon" onClick={(prev) => { setEx(prev => !prev) }} />
                <img src={ userData?.image || dp} onClick={(prev) => { setProfile(prev => !prev) }} className="userProfileImage" />


            </div>

        </div>
    )
}

export default Bottom