import React, { useContext } from "react";
import { PostCard } from "../postCard";
import styles from "./postList.module.css";
import { IProbs } from "./types";
import { PostContext } from "../../context/postContext";
// export const tags = [
//      "nature",
//      "hell",
//      'nether',
//      "animal"
// ]
export function PostList() {
    // const filteredPosts = probs.posts
    const context = useContext(PostContext);
    if (!context) return null;
    const {
        posts,
        tags,
        likes,
        textInSearch,
        postError,
        selectedTag,
        SettextInSearch,
        setLikes,
        refreshPosts,
        refreshTags,
        SetSelectedTag
    } = context
    return <div className={styles.postList}>
        {
            posts ? 
            posts.map((post,index) => {
                return <PostCard post={post} tags={post.tags} key={post.id}/>
            }) : <div></div>
        }
        </div>
        
}