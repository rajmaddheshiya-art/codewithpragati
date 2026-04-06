import axios from "axios";
import React, { useContext, useEffect } from "react";
import { dataContext } from "../useContext/useContext";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

function useGetCurrentUser(){
    let {serverUrl} = useContext(dataContext)
    let dispatch = useDispatch()
    useEffect(()=>{
        const fatech = async(e)=>{
            try {
                let res = await axios.get(`${serverUrl}/current`,{withCredentials:true})
                dispatch(setUserData(res.data))
                console.log(res)
            } catch (error) {
                console.log(error.response.data.message)
            }
        }
        fatech()
    },[])
}

export default useGetCurrentUser