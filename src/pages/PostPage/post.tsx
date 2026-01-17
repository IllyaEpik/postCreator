import React from "react";
import { PostCard } from "../../components/postCard";
import { useFetch } from "../../hooks/useFetch";
import { IPost } from "../../shared";
import { useParams } from "react-router-dom";
import styles from "./post.module.css";
import { Back } from "../../components/back/index";
import { CommentWriter } from "../../components/commentWriter";
import { Avatar } from "../../shared/avatar";
import { Comment } from "../../components/comment";
export function PostPage(){
    const {id} = useParams()

    const [postData, loading, error ] = useFetch<IPost>(`http://127.0.0.1:8888/posts/find/${id}`)
    console.log(`http://127.0.0.1:8888/find/${id}`,error)
    if (loading){
        return <div>loading</div>
    }
    if (error || !postData){
        return <div>error</div>
    }
    const comments = postData.comments
    console.log(comments)
    return <div className={styles.fullPage}>
        <div>
            <Back/>

        </div>
        
        <div className={styles.post}>
            <PostCard tags={postData?.tags} post={postData}/>

        </div>
        <div className={styles.empty}>

        </div>
        {/* <div className={styles.commentsBlock}> */}
        <CommentWriter id={Number(id)}></CommentWriter>
            
        <div className={styles.smallEmpty}>

        </div>
        {comments.map((comment,index)=>{
            return <Comment commentText={comment}/>
        })}

        {/* </div> */}
        <div className={styles.empty}>

        </div>
    </div>
}