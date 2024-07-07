import React from 'react'
import styles from "../styles/posts.module.scss"

export default function Post(props){
    const { content, tags } = props

    return (
      <div className={`${styles.post}`}>
        <h1 className={`${styles.title} pt-sans`}>"{content}"</h1>
        <div className={`${styles.tags}`}>
            {tags.map((tag, index) => {
                return (
                    <span 
                        key={index}
                        className={`${styles.tag} beiruti-4`}
                    >
                        {tag}
                    </span>
                )
            })}
        </div>
      </div>
    );
}