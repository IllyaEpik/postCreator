import React from "react";
import styles from "./main.module.css";
import PostList from "../postList/postList";
interface Iprobs{ 
    children:React.ReactNode
}
export function Main(probs:Iprobs) {
    const clildren = probs.children
    return <main id={styles.main}>
        
        {clildren}
        {/* <p>with this site you can create posts</p> */}
    </main>
}