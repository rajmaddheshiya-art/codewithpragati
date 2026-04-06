import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOtherUserData } from "../redux/userSlice";
import { dataContext } from "../useContext/useContext";

function useGetOtherUserData(){
    let {serverUrl} = useContext(dataContext)
    let dispatch = useDispatch()
    useEffect(()=>{
        const fatech = async(e)=>{
            try {
                let res = await axios.get(`${serverUrl}/allUsers`,{withCredentials:true})
                dispatch(setOtherUserData(res.data))
            } catch (error) {
                console.log(error)
            }
        }
        fatech()
    },[])
}
export default useGetOtherUserData