import React from "react";
import { IProbs } from "./types";


export default function PostCard(probs:IProbs) {
    const post = probs.post
    return <div>
        <div>
            <span>{post.title}</span>
            <img src={post.avatar} alt="" />
        </div>
        <img src={post.image} alt="" />
        <p>{probs.post.description}</p>
        <div>
            <img src="/like" alt="" />
            <div>
                {post.tags.map((tag) => {
                    return <span>{tag}</span>
                })}
            </div>
        </div>
    </div>;
}