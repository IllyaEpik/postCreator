import React from "react";
import PostCard from "../postCard/postCard";
import Search from "../search/search";
import styles from "./postList.module.css";
export const tags = [
     "nature",
     "hell",
     'nether',
     "animal"
]
const posts = [
    {
        title:"title",
        image:"search.png",
        avatar:"avatar.png",
        description:"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
        likes:213,
        tags: [
            0
        ]
    },
    {
        title:"satana",
        image:"search.png",
        avatar:"avatar.png",
        description:"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
        likes:213,
        tags: [
            1,
            2,
            0
        ]
    },
    {
        title:"capybara",
        image:
        "search.png",
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
    return <div>
        <Search/>
        <div className={styles.postList}>
        {
            posts.map((post) => {
                return <PostCard post={post} tags={tags}/>
            })
        }

        </div>
        
    </div>;
}