import React, { useState } from "react";
import {HeaderButton} from "../headerButton/header.button";
import { ReactComponent as Menu } from "../../assets/svg/menu.svg";
import { IMAGES } from "../../shared/images";
import { useMediaQuery  } from "react-responsive";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
export function Header() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 950px)' })
    const [openModal,setOpenModal] = useState(false)
    const changeModal = ()=> setOpenModal(!openModal)
    return (<header className={styles.header}>
        <HeaderButton href="" text = "postCreator"/>
        
            
            {isTabletOrMobile ? 
            <div id={styles.pages}>
                <Menu width={50} height={50} onClick={changeModal} className={styles.menu}/>
                <img src={IMAGES.avatar} alt="avatar" />
                {openModal && <nav className={styles.modal}>
                    <Link to="/posts">posts</Link>
                    <Link to="/createPost">create post</Link>
                    <Link to="/main">main</Link>
                    <Link to="/language">english</Link>
                </nav>}
            </div>
            :
            <div id={styles.pages}>
                <HeaderButton href="/posts" text = "posts"/>
                <HeaderButton href="/createPost" text = "create post"/>
                <HeaderButton href="/main" text = "main"/>
                <HeaderButton href="/language" text = "english"/>
                <img src={IMAGES.avatar} alt="avatar" />
            </div>
        }
        </header>)
}