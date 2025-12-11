import React from "react";
import {HeaderButton} from "../headerButton/header.button";
import { ReactComponent as Menu } from "../../assets/svg/menu.svg";
import { useMediaQuery  } from "react-responsive";
import styles from "./header.module.css";
export function Header() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 950px)' })
    
    return (<header className={styles.header}>
        <HeaderButton href="" text = "postCreator"/>
        
            
            {isTabletOrMobile ? 
            <div id={styles.pages}>
            <Menu width={50} height={50} className={styles.menu}/>
                <img src="/avatar.png" alt="avatar" />
            </div>
            :
            <div id={styles.pages}>
                <HeaderButton href="/posts" text = "posts"/>
                <HeaderButton href="/createPost" text = "create post"/>
                <HeaderButton href="/main" text = "main"/>
                <HeaderButton href="/language" text = "english"/>
                <img src="/avatar.png" alt="avatar" />
            </div>
        }
        </header>)
}