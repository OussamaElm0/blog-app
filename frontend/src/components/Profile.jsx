import React, { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import PostsContext from '../contexts/PostContext'
import Post from './Post'
import profile_styles from "../styles/profile.module.scss"
import posts_styles from "../styles/posts.module.scss"

export default function Profile() {
    const [userPosts, setUserPosts] = useState([])
    const [username, setUsername] = useState("")
    const posts = useContext(PostsContext)

    useEffect(() => {
        const _id = Cookies.get("_id")
        const username = Cookies.get("user_username")
        const userPosts = posts.filter(post => post.user_id === _id)
        setUserPosts(userPosts)
        setUsername(username)
    },[])

    return (
      <>
        <h1 className={`${profile_styles.username} beiruti-7 text-success`}>@{username}</h1>
        <div className={posts_styles.posts}>
          {userPosts.map((post) => {
            return <Post key={post._id} {...post}  />;
          })}
        </div>
      </>
    );
}