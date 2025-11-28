import React from "react";
import {HeaderButton} from "./header.button";
import styles from "./header.module.css";
export function Header() {
    
    return <header className={styles.header}>
        <HeaderButton href="" text = "postCreator"/>
        <div id={styles.pages}>
            <HeaderButton href="/posts" text = "posts"/>
            <HeaderButton href="/createPost" text = "create post"/>
            <HeaderButton href="/main" text = "main"/>
            <HeaderButton href="/language" text = "english"/>
            <img src="/avatar.png" alt="avatar" />
        </div>
    </header>
}