import React, { useEffect, useState } from "react";
import PostCard from "../postCard/postCard";
import Search from "../search/search";
import styles from "./postList.module.css";
import { IProbs } from "./types";
export const tags = [
     "nature",
     "hell",
     'nether',
     "animal"
]
// export const posts = [
//     {
//         title:"title",
//         image:"search.png",
//         avatar:"avatar.png",
//         description:"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
//         likes:101,
//         tags: [
//             0
//         ]
//     },
//     {
//         title:"satana",
//         image:"search.png",
//         avatar:"avatar.png",
//         description:"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
//         likes:51,
//         tags: [
//             1,
//             2,
//             0
//         ]
//     },
//     {
//         title:"capybara",
//         image:"search.png",
//         avatar:"avatar.png",
//         description:"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
//         likes:213,
//         tags: [
//             3,
//             0
//         ]
//     }
// ]
export default function PostList(probs:IProbs) {
    // const [filteredPosts, setFilteredPosts] = useState(probs.posts)
    const filteredPosts = probs.posts
    return <div>
        {/* <Search setFilteredPosts={setFilteredPosts}/> */}
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