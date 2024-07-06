import React, { useContext } from 'react'
import PostsContext from '../contexts/PostContext'
import Post from './Post'
import styles from "../styles/posts.module.scss"

export default function Posts() {
    const posts = useContext(PostsContext)

    return (
        <div className={styles.posts}>
            {posts.map(post => {
                return <Post key={post._id} {...post} />
            })}
        </div>
    )
    }