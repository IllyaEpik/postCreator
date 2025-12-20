import React from "react";
import { PostCard } from "../postCard";
import styles from "./postList.module.css";
import { IProbs } from "./types";
export const tags = [
     "nature",
     "hell",
     'nether',
     "animal"
]
export function PostList(probs:IProbs) {
    const filteredPosts = probs.posts
    return <div>
        <div className={styles.postList}>
        {
            filteredPosts ? 
            filteredPosts.map((post) => {
                return <PostCard post={post} tags={tags}/>
            }) : <div></div>
        }
        </div>
        
    </div>;
}