import { useEffect, useState } from "react";
import { IPost, postCreate } from "../shared/dbTypes";
export function useCreatePost(): [IPost | undefined, boolean, unknown, (post:postCreate) => void] {
    const [data,setData] = useState<IPost | undefined>()
    const [error,setError] = useState<unknown>(null)
    const [loading,setLoading] = useState<boolean>(false)
    
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzY4NjMxNTQ1LCJleHAiOjE3NjkyMzYzNDV9.u7fSu_hq8P9y7MZFHHCTWgh87n8Kf2LVbb-v8kBZJNo"
    const [post,setPost] = useState<postCreate | null>(null)
    
    useEffect(() => {
        setLoading(true)
        if (post===null) return
        const createPost = async (post:postCreate) => {
            if (!post) return

            try {
                const response = await fetch(`http://127.0.0.1:8888/posts/create`,{method: "POST",
                    headers: { 
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify([post])
                })
                const json = await response.json() as IPost[]
                setData( json[0])
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false) 
            }
        }
        
        createPost(post)
    }, [post])

    return [ data, loading, error, setPost ]
} 