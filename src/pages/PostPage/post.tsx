import React from "react";
import { PostCard } from "../../components/postCard";
import { useFetch } from "../../hooks/useFetch";
import { IPost } from "../../shared";
import { useParams } from "react-router-dom";

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
    return <div>
        <PostCard tags={postData?.tags} post={postData}/>
    </div>
}