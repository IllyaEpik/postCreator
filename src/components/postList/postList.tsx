import React from "react";
import { PostCard } from "../postCard";
import styles from "./postList.module.css";
import { IProbs } from "./types";
// export const tags = [
//      "nature",
//      "hell",
//      'nether',
//      "animal"
// ]
export function PostList(probs:IProbs) {
    const filteredPosts = probs.posts
    return <div className={styles.postList}>
        {
            filteredPosts ? 
            filteredPosts.map((post,index) => {
                return <PostCard post={post} tags={post.tags} key={index}/>
            }) : <div></div>
        }
        </div>
        
}