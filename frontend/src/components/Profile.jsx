import React, { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import PostsContext from '../contexts/PostContext'
import Post from './Post'

export default function Profile() {
    const [userPosts, setUserPosts] = useState([])
    const posts = useContext(PostsContext)

    useEffect(() => {
        const _id = Cookies.get("_id")
        const userPosts = posts.filter(post => post.user_id === _id)
        setUserPosts(userPosts)
    },[])

    return (
        <>
            <h1>Profile</h1>
            {userPosts.map(post => {
                return <Post key={post._id} {...post} />
            })}
        </>
    )
}