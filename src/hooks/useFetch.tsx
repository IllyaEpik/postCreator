import { useEffect, useState } from "react";
import { IPost } from "../shared";

export function useFetch<T>(url:string): [T | undefined, boolean, unknown] {
        const [data,setData] = useState<T>()
        const [error,setError] = useState<unknown>(null)
        const [loading,setLoading] = useState<boolean>(true)
        useEffect(() => {   
            const fetchData = async () => {
                try {
                    const response = await fetch(url)
                    const json = await response.json() as T
                    console.log(await json)
                    setData(await json)
                } catch (error) {
                    setError(error)
                    console.log(error)
                } finally {
                    setLoading(false)
                }
            }
            fetchData()
            
        }, [url,loading])
        return [ data, loading, error ]
} 