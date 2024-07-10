import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import PostsContext from "./contexts/PostContext";
import "./styles/_fonts.scss"
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './styles/_globals.scss'
import AuthContext from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Cookies from "js-cookie"
import Register from "./components/Register";
import CreatePost from "./components/CreatePost";
import ShowPost from "./components/ShowPost";
const env = import.meta.env;

export default function App() {
  const [posts, setPosts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  const guestRoutes = (
    <>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />}/>
    </>
  );

  const authRoutes = (
    <>
      <Route path="say-hello" element={<h1>Say hello</h1>} />
      <Route path="posts/create" element={<CreatePost />} />
    </>
  )

 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get(
         `${env.VITE_REACT_APP_API_URL}/posts`
       );
       setPosts(response.data);
     } catch (e) {
       console.log(e.message);
     }
   };

   fetchData();
   
   const tokenExist = Cookies.get("token");
   setIsAuthenticated(tokenExist ? true : false); 
 });


  return (
    <AuthContext.Provider value={isAuthenticated}>
      <PostsContext.Provider value={posts}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route index element={<Posts />} />
            <Route path="posts/:post_id" element={<ShowPost />} />
            {isAuthenticated ? authRoutes : guestRoutes}
          </Routes>
        </BrowserRouter>
      </PostsContext.Provider>
    </AuthContext.Provider>
  );
}
