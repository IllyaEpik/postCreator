import React from "react";
import { IProbs } from "./types";
import styles from "./postCard.module.css";

export function PostCard(probs:IProbs) {
    const post = probs.post
    const tags = probs.tags
    return <div className={styles.postCard} id="postCard">
        <div className={styles.titleBlock}>
            <span id="titleBlock">{post.name}</span>
            {/* <img src={post.avatar} alt="" /> */}
        </div>
        {
            post.img ? 
            <img src={post.img} alt="" /> :
            <img src="" alt="" />
        }
        
        <p className={styles.description}>{probs.post.description}</p> 
        <div className={styles.footerBlock}>
            <div className={styles.tagsBlock} id="tagBlock">
            
                {post.tags.map((tag) => {
                    return <span className={styles.tag}>#{tag}</span>
                })}
            </div>
            {/* <span className={styles.LikesBlock} id="LikesBlock"><img src="/like.png" alt="" />{post.likes}</span>   */}
        </div>
    </div>;
}