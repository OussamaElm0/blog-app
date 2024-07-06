import React, { useContext, useEffect } from 'react'
import PostsContext from '../contexts/PostContext'
import Post from './Post'

export default function Posts() {
    const posts = useContext(PostsContext)

    useEffect(() => {
        console.log(posts);
    }, [])

    return (
        <div>
        <h1>Quotes</h1>
        {posts.map(post => {
            return <Post key={post._id} {...post} />
        })}
        </div>
    )
    }