import { useEffect, useState } from "react";
export function useFetch<T>(url:string,method="GET"): [T | undefined, boolean, unknown, ()=> void] {
        const [data,setData] = useState<T>()
        const [error,setError] = useState<unknown>(null)
        const [loading,setLoading] = useState<boolean>(true)
        const [refetchIndex, setRefetchIndex] = useState(0);
        const refresh = () => setRefetchIndex(refetchIndex+1)
        useEffect(() => {   
            const fetchData = async () => {
                try {
                    const response = await fetch(url,{method: method})
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
            
        }, [url,refetchIndex])
        return [ data, loading, error, refresh ]
} 