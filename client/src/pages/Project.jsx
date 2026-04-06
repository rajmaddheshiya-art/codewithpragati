import React from "react";
import last from "../assets/last.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"
import p5 from "../assets/p5.png"
import p6 from "../assets/p6.png"
import { useNavigate } from "react-router";
import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
function Project() {
    let nav = useNavigate()
    return (
        <div className="projectDiv">
            <h1 id="displayTitle">Featured Projects</h1>

            <div className="allProject">

                <div className="pro">
                    <h1 id="displayTitle">SoundX Hearing Care</h1>
                    <p id="protitle">Advanced health-care consultation platfrom</p>
                    <a id="proLink" href="https://www.mysoundx.com/">View Live Case Study</a>
                </div>

                <div className="pro">
                    <h1 id="displayTitle">VRR Infracity</h1>
                    <p id="protitle"> Strategic Real Estate & Infrastructure Solutions</p>
                    <p id="proLink">View Live Case Study</p>
                </div>

                <div className="pro">
                    <h1 id="displayTitle">Trinity Neuro Plus</h1>
                    <p id="protitle">Best Neurosurgeon in Gorakhpur (Dr. Anuj Mishra)</p>
                    <a id="proLink" href="https://trinityneuroplus.com/">View Live Case Study</a>

                </div>

            </div>
            .

            <h1 id="displayTitle">Thank You</h1>

            <div className="last">

                <div className="lastImg">
                    <MdEmail id="lastI" />
                    <div className="lastIconName">
                        <h1 id="lastName">Code with Pragati</h1>
                        <h1>CodewithPragati@gmail.com</h1>
                    </div>

                </div>

                <div className="lastImg">
                    <FaSquareWhatsapp id="lastI" />
                    <div className="lastIconName">
                        <h1 id="lastName">whatsapp business</h1>
                        <h1>9278265140</h1>
                    </div>

                </div>

                <div className="lastImg">
                    <MdAddCall id="lastI" />
                    <div className="lastIconName">
                        <h1 id="lastName">Direct contact</h1>
                        <h1>9278265140</h1>
                    </div>

                </div>

                <div className="lastImg">
                    <MdAddCall id="lastI" />
                    <div className="lastIconName">
                        <h1 id="lastName">Book a Strategic</h1>
                        <h1>Session</h1>
                    </div>

                </div>

                
            </div>

        </div>
    )
}

export default Project