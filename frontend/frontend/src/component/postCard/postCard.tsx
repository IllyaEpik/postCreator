import React from "react";
import { IProbs } from "../../types";
import styles from "./postCard.module.css";

export default function PostCard(probs:IProbs) {
    const post = probs.post
    return <div className={styles.postCard}>
        <div className={styles.titleBlock}>
            <span>{post.title}</span>
            <img src={post.avatar} alt="" />
        </div>
        <img src={post.image} alt="" />
        <p className={styles.description}>{probs.post.description}</p>
        <div>
            <img src="/like" alt="" />
            <div className={styles.tagsBlock}>
                {post.tags.map((tag) => {
                    return <span className={styles.tag}>#{tag}</span>
                })}
            </div>
        </div>
    </div>;
}