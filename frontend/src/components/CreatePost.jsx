import React, { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import styles from "../styles/posts.module.scss"

const env = import.meta.env

export default function CreatePost(){
    const [content, setContent] = useState("")
    const [tags, setTags] = useState([])
    const [currentTag, setCurrentTag] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()

        setTags(currentTag.split(' '))
        if(content == "") {
            toast.error('The content is required')
        } else {
            try {
                await axios.post(
                  `${env.VITE_REACT_APP_API_URL}/posts`,
                  {
                    content,
                    tags
                  }, {
                    withCredentials: true
                  }
                );
                navigate('/')
            } catch (e) {
                console.log(e)
            }
        }
    }

    const handleContent = e => {
        const { value } = e.target
        setContent(value)
    }
    const handleTag = e => {
        const { value } = e.target
        setCurrentTag(value)
    }
    const addToTags = e => {
      e.preventDefault()
      if (currentTag && !tags.includes(currentTag)) {
        setTags([...tags, currentTag]);
        setCurrentTag('');
      }
    }
    
    return (
      <>
        <h1 className={styles.page_title}>Create a new post</h1>
        <form onSubmit={handleSubmit} className={styles.create_post_form}>
            <div className={styles.form_group}>
              <label htmlFor="content" className="form-label">
                Content:
              </label>
              <textarea
                className="form-control"
                id="content"
                rows="3"
                onChange={handleContent}
                value={content}
                name="content"
              ></textarea>
            </div>
            <div className={styles.form_group}>
              <label>Tags:</label>
              <div className={styles.add_tag}>
                <input name="tags" value={currentTag} onChange={handleTag} />
                <button
                  onClick={addToTags}
                  className={`btn btn-outline-dark ${styles.btn}`}
                >
                  Add tag
                </button>
              </div>
            </div>
            <button
              type="submit"
              className={`btn btn-primary ${styles.submit_btn}`}
            >
              Create
            </button>
          </form>
        <Toaster />
      </>
    );
}