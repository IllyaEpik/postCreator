import { useEffect, useState } from "react";
import { Icomment } from "../shared/dbTypes";
export function useComment(id:number): [Icomment | undefined, boolean, unknown, (comment:string) => void] {
    const [data,setData] = useState<Icomment | undefined>()
    const [error,setError] = useState<unknown>(null)
    const [loading,setLoading] = useState<boolean>(false)
    
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzY4NjMxNTQ1LCJleHAiOjE3NjkyMzYzNDV9.u7fSu_hq8P9y7MZFHHCTWgh87n8Kf2LVbb-v8kBZJNo"
    const [comment,setComment] = useState("")
    
    useEffect(() => {
        const sendComment = async (comment:string) => {
            if (!comment || comment==="") return

            try {
                const response = await fetch(`http://127.0.0.1:8888/posts/${id}/comment`,{method: "POST",
                    headers: { 
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({body:comment})
                })
                
                const json = await response.json() as Icomment
                setData( json)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        sendComment(comment)
    }, [comment])
    
    return [ data, loading, error, setComment ]
} 