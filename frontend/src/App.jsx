import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const env = import.meta.env;

const PostsContext = createContext();

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/posts`);
        setPosts(data);
      })();
      console.log(posts);
    } catch (e) {
      console.log(e.message);
    }
    console.log(env.VITE_REACT_APP_API_URL);
  }, []);

  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}
