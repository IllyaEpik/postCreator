import React from "react";
import PostCard from "../postCard/postCard";
import Search from "../search/search";
import styles from "./postList.module.css";
const posts = [
    {
        title:"title",
        image:"search.png",
        avatar:"avatar.png",
        description:"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
        likes:213,
        tags: [
            "nature",
            "nature",
            "nature"
        ]
    }
]
export default function PostList() {
    return <div>
        <Search/>
        <div className={styles.postList}>
        {
            posts.map((post) => {
                return <PostCard post={post}/>
            })
        }

        </div>
        
    </div>;
}