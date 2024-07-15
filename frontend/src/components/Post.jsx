import React from 'react'
import styles from "../styles/posts.module.scss"
import { Link } from 'react-router-dom';

export default function Post(props){
    const { content, tags, _id } = props

    return (
      <div className={`${styles.post}`}>
        <Link to={`posts/${_id}`} className={`${styles.title} h1 pt-sans`}>
          "{content}"
        </Link>k
        <div className={`${styles.tags}`}>
          {tags.map((tag, index) => {
            return (
              <span key={index} className={`${styles.tag} beiruti-4`}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    );
}