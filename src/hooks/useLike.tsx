import { IPost } from "../shared";

export function useLike(setPost:(post:IPost)=>void,id:number,post:IPost): (event: React.MouseEvent)=>Promise<void>{
    const userId = 1
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzY4NjMxNTQ1LCJleHAiOjE3NjkyMzYzNDV9.u7fSu_hq8P9y7MZFHHCTWgh87n8Kf2LVbb-v8kBZJNo"
    async function handleLike  (event: React.MouseEvent){
    
        event.stopPropagation();
        try {
            const response = await fetch(`http://127.0.0.1:8888/posts/like/${id}`, {
                method: "PUT",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                
            });
            if (response.ok) {
                if (response.status==201){
                    const updatedLikes: number[] = await response.json(); 
                    
                    setPost({ ...post, likes: updatedLikes });
                }
                if (response.status==204){
                    const updatedLikes = post.likes.filter((like)=>{return like!=userId})
                    setPost({ ...post, likes: updatedLikes });
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    return handleLike
}