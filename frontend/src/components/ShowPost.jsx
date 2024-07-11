import React, { useContext, useEffect, useState } from "react";
import PostsContext from "../contexts/PostContext";
import { useParams, Link } from "react-router-dom";
import styles from "../styles/posts.module.scss";
import PacmanLoader from "react-spinners/PacmanLoader";
import Post from "./Post"

export default function ShowPost() {
  const [post, setPost] = useState(null);
  const [otherPosts, setOtherPosts] = useState([])
  const [loading, setLoading] = useState(true);
  const posts = useContext(PostsContext);
  const { post_id } = useParams();

  useEffect(() => {
    const post = posts.find((post) => post._id === post_id);
    const other_posts = posts.filter((post) => post._id !== post_id);
    other_posts.slice(5);
    if (post !== undefined) {
      setPost(post);
      setOtherPosts(other_posts)
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [posts, post_id]);

  if (loading || !post) {
    return (
      <span className={styles.loading}>
        <PacmanLoader />
      </span>
    );
  }

  return (
    <>
      <div className={styles.show_post_container}>
        <div className={styles.post}>
          <h1 className={`${styles.content}`}>{post.content}</h1>
          <div className={styles.tags}>
            {post.tags.map((tag, index) => {
              return (
                <span key={index} className={`${styles.tag} kanit-4`}>
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
        <div className={styles.other_posts}>
            {otherPosts.map(post => {
                return <Post key={post._id} {...post} />
            })}
            <Link to="/" className={styles.see_more}>
                See more...
            </Link>
        </div>
      </div>
    </>
  );
}
