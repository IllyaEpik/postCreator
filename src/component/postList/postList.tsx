import React, { useState } from "react";
import PostCard from "../postCard/postCard";
import Search from "../search/search";
import styles from "./postList.module.css";
export const tags = [
     "nature",
     "hell",
     'nether',
     "animal"
]
export const posts = [
    {
        title:"title",
        image:"search.png",
        avatar:"avatar.png",
        description:"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
        likes:101,
        tags: [
            0
        ]
    },
    {
        title:"satana",
        image:"search.png",
        avatar:"avatar.png",
        description:"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
        likes:51,
        tags: [
            1,
            2,
            0
        ]
    },
    {
        title:"capybara",
        image:"search.png",
        avatar:"avatar.png",
        description:"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
        likes:213,
        tags: [
            3,
            0
        ]
    }
]
export default function PostList() {
    const [filteredPosts, setFilteredPosts] = useState(posts)
    return <div>
        <Search setFilteredPosts={setFilteredPosts}/>
        <div className={styles.postList}>
        {
            filteredPosts.map((post) => {
                return <PostCard post={post} tags={tags}/>
            })
        }

        </div>
        
    </div>;
}