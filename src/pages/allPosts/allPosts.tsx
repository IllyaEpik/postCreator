import React, { useEffect, useState } from "react";
import {PostList} from "../../components/postList";
import {Search} from "../../components/search";
import type{ IPost } from "../../shared/dbTypes";
import { useFetch } from "../../hooks/useFetch";
import styles from "./allPosts.module.css";
export function AllPosts() {
    // async function getRequest():Promise<IPost[]> {
    //     const response = await fetch('http://127.0.0.1:8888/posts/all')
    //     const posts:IPost[] = await response.json()
    //     return await posts
    // }
    // const posts:Promise<IPost[]> = getRequest()
    const [data, loading, error ] = useFetch<IPost[]>('http://127.0.0.1:8888/posts/all')
    // console.log(data)
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([])
    useEffect(() => {
        setFilteredPosts(data ? data : [])
    },[loading])
    return <div className={styles.allPostsPage}>
        <Search setFilteredPosts={setFilteredPosts} posts={filteredPosts}/>
        <PostList posts={filteredPosts}/>
        
    </div>;
}