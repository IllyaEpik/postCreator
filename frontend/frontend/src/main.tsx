import React from "react";
import styles from "./main.module.css";
import PostList from "./postList";
export function Main() {
    return <main id={styles.main}>
        <PostList></PostList>
        {/* <p>with this site you can create posts</p> */}
    </main>
}