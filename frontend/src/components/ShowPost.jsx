import React ,{ useContext, useEffect, useState } from 'react'
import PostsContext from '../contexts/PostContext'
import { useParams } from 'react-router-dom'

export default function ShowPost() {
    const [post, setPost] = useState({})
    const posts = useContext(PostsContext)
    const { post_id } = useParams()

    useEffect(() => {
        const post = posts.find((post) => post._id == post_id);
        setPost(post)
    }, [])

    return (
        <>
            {post.content}
        </>
    )
}