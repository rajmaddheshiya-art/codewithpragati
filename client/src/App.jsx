import React from "react";
import { Navigate, Route, Routes } from "react-router";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import "./App.css"
import useGetCurrentUser from "./customHooks/getCurrentUser";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Post from "./pages/Post";
import useGetOtherUserData from "./customHooks/getOtherUserData";


function App(){
  useGetCurrentUser()
  useGetOtherUserData()
  let {userData} = useSelector(state=>state.user)
  return(
    <Routes>
      <Route path="/signup" element={!userData?<SignUp/>:<Navigate to="/"/>}/>
      <Route path="/Login" element={!userData?<Login/>:<Navigate to="/"/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/post" element={userData?<Post/>:<Navigate to="/signup"/>}/>


      



    </Routes>
  )
}

export default App