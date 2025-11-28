import React from "react";
import PostCard from "./postCard";
import Search from "./search";
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
        <div>
        {
            posts.map((post) => {
                return <PostCard post={post}/>
            })
        }

        </div>
        
    </div>;
}