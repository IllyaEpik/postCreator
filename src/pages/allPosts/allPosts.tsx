import React, { useEffect, useState } from "react";
import PostList from "../../component/postList/postList";
import Search from "../../component/search/search";
import type{ IPost } from "../../shared/dbTypes";
export default function AllPosts() {
    // async function getRequest():Promise<IPost[]> {
    //     const response = await fetch('http://127.0.0.1:8888/posts/all')
    //     const posts:IPost[] = await response.json()
    //     return await posts
    // }
    // const posts:Promise<IPost[]> = getRequest()
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([])
    // posts.then((realPosts) => {
    //     setFilteredPosts(realPosts)
    // })
    

    return <div>
        <Search setFilteredPosts={setFilteredPosts}/>
        <PostList posts={filteredPosts}/>
        
    </div>;
}