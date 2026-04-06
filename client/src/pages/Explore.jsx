import axios from "axios"
import React, { useContext, useState } from "react"
import { dataContext } from "../useContext/useContext"
import { useDispatch, useSelector } from "react-redux"
import { setUserData } from "../redux/userSlice"
import dp from "../assets/dp.png"
function Explore() {
    let [post, setPost] = useState("")
    let { serverUrl } = useContext(dataContext)
    let dispatch = useDispatch()

    let {otherUserData} = useSelector(state=>state.user)



    return (
        <div className="postDiv">


            <div className="post">
                <div className="exploreDiv">
                    <h1 id="exploreTitle">Explore</h1>
                </div>
                <div className="userDetails">

                    {
                        otherUserData && otherUserData?.map((value, index)=>(
                            <div id="otherUser" key={index}>
                                <img id="OtherUserImage" src={value.image || dp} alt="" />
                                <h1 id="OtherUserName">{value.name}</h1>

                            </div>
                        ))
                    }

                    
                </div>

            </div>

        </div>
    )
}

export default Explore