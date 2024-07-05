import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const env = import.meta.env;

const PostsContext = createContext();

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_URL}/posts`
        );
        setPosts(data);
        console.log(data);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
    </>
  );
}
