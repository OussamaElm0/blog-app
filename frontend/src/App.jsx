import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import PostsContext from "./contexts/PostContext";
const env = import.meta.env;

export default function App() {
  const [posts, setPosts] = useState([]);

 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get(
         `${import.meta.env.VITE_REACT_APP_API_URL}/posts`
       );
       setPosts(response.data);
       console.log(posts);
     } catch (e) {
       console.log(e.message);
     }
   };

   fetchData();
 }, []);

  return (
    <PostsContext.Provider value={posts}>
      <Posts />
    </PostsContext.Provider>
  );
}
