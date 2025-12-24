import React from "react";
import { IProbs } from "./types";
import styles from "./postCard.module.css";
import { IMAGES } from "../../shared/images";

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
            <div></div>
        }
        
        <p className={styles.description}>{probs.post.description}</p> 
        <div className={styles.footerBlock}>
            <div className={styles.tagsBlock} id="tagBlock">
            
                {tags.map((tag,index) => {
                    return <span className={styles.tag} key={index}>#{tag}</span>
                })}
            </div>
            <span className={styles.LikesBlock} id="LikesBlock"><img src={IMAGES.like} alt="" />{post.likes}</span>  
        </div>
    </div>;
}