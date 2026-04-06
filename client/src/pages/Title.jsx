import React, { useEffect, useState } from "react"
import next from "../assets/next.png"
import react from "../assets/react.png"
import figma from "../assets/figma.png"
import mongo from "../assets/mongo.png"
import node from "../assets/node.png"
import { motion, AnimatePresence } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import pLog from "../assets/pLog.png"
import final from "../assets/final.png"
import finalHead from "../assets/finalHead.png"
import { FaLocationArrow } from "react-icons/fa";
import { PiDribbbleLogoFill } from "react-icons/pi";
function Title() {

    let [text, setText] = useState("Code with pragati")
    let [ad, setAd] = useState(false)


    useEffect(() => {
        const timer = setTimeout(() => {
            setText("Creative Designer & Full Stack Developer")
        }, 2000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div className="displayTitle">




            <h1 id="displayTitle">Pragati Gupta </h1>

            <div className="TitleDiv">
                <AnimatePresence mode="wait" >
                    <motion.span
                        key={text}
                        id="displayTitleSpan"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {text}
                    </motion.span>
                </AnimatePresence>
            </div>

            {/* <div className="TitleDiv">
                <h1 id="displayTitleSpan">Creative Designer & Full Stack Developer</h1>

            </div> */}

            <div className="titleDis">
                {/* <PiDribbbleLogoFill  id="ball"/> */}
                <div className="detailsTitle">

                    <div className="finalDiv">

                        <div className="final">
                            <img src={finalHead} id="finalHead" />

                        </div>

                        <div className="book" onClick={() => { setAd(true) }}>
                            <div id="bookNow">
                                <MdEmail id="bookLogo" />
                                <button id="book">Book Now</button>
                            </div>
                        </div>

                        <div className="final">
                            <img src={final} id="final" />

                        </div>
                    </div>
                    <motion.h1
                        initial={{ x: 130, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 3 }}
                        id="ev">Expertise & <motion.span style={{ color: "#1b1b1b " }}
                        // initial={{opacity:1}}
                        // animate={{opacity:0}}
                        // transition={{duration:1,delay:1, repeat:Infinity}}
                        >

                            <span id="vision"> Vision </span>

                            <motion.span
                                style={{ display: "inline-block" }}
                                initial={{ y: 9, x: 9, }}
                                animate={{ y: 0, }}
                                transition={{ duration: 0.9, repeat: Infinity }}
                            > <FaLocationArrow id="arrow" /></motion.span>
                        </motion.span> </motion.h1>

                    <h1 id="detailsTitle">
                        I am a creative and detail-oriented
                        <span className="changeColor"> Graphics Designer</span> and Developer specializing
                        in modern design, responsive websites, and software
                        solutions. I focus on delivering high-quality and
                        user-friendly digital experiences. I create modern,
                        clean, and visually engaging designs with a strong focus
                        on storytelling and <span className="changeColor"> creativity. </span>
                    </h1>
                </div>
            </div>

            <marquee>
                <div className="skillDiv">

                    <div className="skill">
                        <img src={figma} id="skillLogo" />
                        <h1 id="skillName">Figma</h1>
                    </div>

                    <div className="skill">
                        <img src={react} id="skillLogo" />

                        <h1 id="skillName">React.js</h1>
                    </div>

                    <div className="skill">
                        <img src={next} id="skillLogo" />

                        <h1 id="skillName">Next.js</h1>
                    </div>
                    <div className="skill">
                        <img src={node} id="skillLogo" />

                        <h1 id="skillName">Node.js</h1>
                    </div>

                    <div className="skill">
                        <img src={mongo} id="skillLogo" />

                        <h1 id="skillName">MongoDB</h1>
                    </div>
                </div>
            </marquee>


            {
                ad && <div className="add">
                    <GrClose id="close" onClick={() => { setAd(false) }} />

                    <div className="ads" >
                        <img src={pLog} id="ads" />

                    </div>

                </div>
            }






        </div>
    )
}

export default Title