import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import PostsContext from "./contexts/PostContext";
import "./styles/_fonts.scss"
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './styles/_globals.scss'
const env = import.meta.env;

export default function App() {
  const [posts, setPosts] = useState([]);

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
 }, []);

  return (
    <PostsContext.Provider value={posts}>
      <Header />
      <Posts />
    </PostsContext.Provider>
  );
}
