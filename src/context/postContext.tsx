import  { createContext, useEffect, useState, type ReactNode } from "react";
import type { IPost } from "../shared";
import { useFetch } from "../hooks/useFetch";
import { ITags } from "../shared/dbTypes";

interface IPostContext {
    posts:IPost[]
    tags:ITags[] | undefined
    likes:number
    textInSearch:string
    selectedTag:string
    postError:unknown
    SettextInSearch:(text:string) => void 
    setLikes:(likes:number)=>void
    refreshPosts: () => void
    refreshTags: () => void
    SetSelectedTag: (tag:string)=>void
}

export const PostContext = createContext<IPostContext | null>(null)

interface contextProbs {
    children: ReactNode
}

export function PostContextProvider(props: contextProbs){
    const {children} = props
    const [selectedTag, SetSelectedTag] = useState("any")
    const [textInSearch, SettextInSearch] = useState("")
    const [likes, setLikes] = useState(0)
    const [posts, setPosts] = useState<IPost[]>([])
    const [postsData, loadingPosts, postError,refreshPosts ] = useFetch<IPost[]>('http://127.0.0.1:8888/posts/all')
    const [tagsData, tagsLoading, tagError,refreshTags ] = useFetch<ITags[]>('http://127.0.0.1:8888/tags/all')
    
    useEffect(() => {
            refreshPosts()
    },[textInSearch,likes,selectedTag]) 
    useEffect(()=>{
        console.log(textInSearch,"QEWqwe")
        if (postsData) {
            const passedPosts = postsData.filter((post) => {
                if (!(post.name.includes(textInSearch))){
                    return false
                }
                if (post.likes.length<likes){
                    return false
                }
                if (!(post.tags.includes(selectedTag)) && selectedTag!="any"){
                    return false
                }
                return true
            })
            setPosts(passedPosts);
            
        }
        
    },[postsData,loadingPosts,postError])
    return (
        <PostContext value={{
            posts,
            tags:tagsData,
            likes,
            textInSearch,
            selectedTag,
            SettextInSearch, 
            setLikes,
            refreshPosts,
            refreshTags,
            SetSelectedTag,
            postError

        }}>
            {children}
        </PostContext>    
    )
}