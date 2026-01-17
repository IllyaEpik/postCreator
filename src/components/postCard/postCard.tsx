import React, { useId, useState } from "react";
import { IProbs } from "./types";
import styles from "./postCard.module.css";
import { IMAGES } from "../../shared/images";
import { Avatar} from "../../shared/avatar"
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { likedPost } from "../../shared/dbTypes";
import { useLike } from "../../hooks/useLike";

export function PostCard(probs:IProbs) {
    const navigate = useNavigate();
    const [post,setPost] = useState(probs.post)
    const tags = probs.tags
    const id = probs.post.id
    const handleClick = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.target as HTMLElement;
        if (target.tagName==="DIV" ){
            navigate(`/post/${id}`);
        }
    };
    const userId = 1
    const handleLike = useLike(setPost,id,post)
    return <div 
        className={styles.postCard} 
        id={"post_"+String(post.id)}
        onClick={handleClick}
    >
        <div className={styles.titleBlock}>
            <div className={styles.userBlock}>
                <Avatar text="I"/>
                <span className={styles.name}>name</span>
                <li className={styles.time}>created 5 min ago</li>

            </div>
            <img src="" alt="" />
        </div>
         <span id="titleBlock">{post.name}</span>
        
        {
            post.img &&

            <div className={styles.imageDiv}>

                <img src={post.img} alt="" className={styles.bluredImg} /> 

                <img src={post.img} alt="" className={styles.img} /> 
            </div>
        }
        {post.description && <p className={styles.description}>{post.description}</p> }
        
        <div className={styles.footerBlock}>
            <div className={styles.tagsBlock} id="tagBlock">
            
                {tags.map((tag,index) => {
                    return <span className={styles.tag} key={index}>#{tag}</span>
                })}
            </div>
            <span className={styles.LikesBlock} id="LikesBlock">
                {post.likes.includes(userId) ?
                    <img src={IMAGES.liked} alt="" onClick={handleLike} /> :
                    <img src={IMAGES.like} alt="" onClick={handleLike} />
                }
                
                {post.likes.length}</span>  
        </div>
    </div>;
}