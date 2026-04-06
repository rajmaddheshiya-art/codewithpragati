import React, { useEffect, useState } from "react";
import { GiConcentrationOrb } from "react-icons/gi";
import { LuSquareMenu } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import Left from "./left";
import pLogo from "../assets/pLogo.png"
function Header() {
    let [menu, setMenu] = useState(false)
    let [text, setText] = useState("Code with pragati")

    useEffect(() => {
        const timer = setTimeout(() => {
            setText("C W P")
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="header">
            <div className="head">
                <div className="headerIco">
                    <img src={pLogo} id="pragatiLogo" />
                    {/* <h1 id="cwp">CWP</h1> */}

                </div>


                <div id="headerTitle">
                    <AnimatePresence mode="wait" >
                        <motion.span
                            key={text}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {text}
                        </motion.span>
                    </AnimatePresence>
                </div>


                    <div className="headerItems">
                        <h1 className="headItems">About</h1>
                        <h1 className="headItems">Services</h1>
                        <h1 className="headItems">Work</h1>


                        <div className="headerMenu" onClick={(prev) => { setMenu(prev => !prev) }}>
                            <LuSquareMenu />
                        </div>
                    </div>

            </div>
            {
                menu && <Left />

            }
        </div>
    )
}

export default Header