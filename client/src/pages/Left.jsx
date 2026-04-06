import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
function Left() {
    return (
        <div> 
            <div className="leftDiv">
                <h1 id="Appname">Code with pragati</h1>

                {/* <div className="itemsDIv">

                    <div className="item">
                        <IoMdHome id="itemIcon" />
                        <h1 id="itemName">About</h1>
                    </div>



                    <div className="item">
                        <IoSearchSharp id="itemIcon" />
                        <h1 id="itemName">Services</h1>
                    </div>




                    <div className="item">
                        <MdExplore id="itemIcon" />
                        <h1 id="itemName">Work</h1>
                    </div>




                    <div className="item">
                        <MdMessage id="itemIcon" />
                        <h1 id="itemName"> -----</h1>
                    </div>



                    <div className="item">
                        <FaSquarePlus id="itemIcon" />
                        <h1 id="itemName">create</h1>
                    </div>



                    <div className="item">
                        <FaUserAlt id="itemIcon" />
                        <h1 id="itemName" >Profile</h1>
                    </div>


                </div> */}
            </div>
        </div>
    )
}

export default Left