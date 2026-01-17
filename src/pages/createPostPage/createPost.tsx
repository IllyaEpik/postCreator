import React, { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./createPost.module.css";
import { Modal } from "../../shared/modal";
import { Avatar } from "../../shared/avatar";
import { IPost, SVG } from "../../shared";
import { useCreatePost } from "../../hooks/useCreatePost";
import { postCreate } from "../../shared/dbTypes";
import { useNavigate } from "react-router-dom";
export function CreatePost() {
    const [isOpen, setIsOpen] = useState(true)
    const inp = useRef<HTMLInputElement>(null)
    const text = useRef<HTMLTextAreaElement>(null)
    const image = useRef<HTMLInputElement>(null)
    const [postData,loading,error,setPost] = useCreatePost()
    const redirect = useNavigate();
    useEffect(()=>{
        console.log(postData, 12313231)
        if (postData?.id){
            redirect(`/post/${postData.id}`)
        }
    },[postData])
    function savePost() {
        if (inp.current==null) return
        if (text.current==null) return
        const title = inp.current.value
        const textContent = text.current.value
        const img = image.current?.value
        const post:postCreate = {
            name:title,
            description:textContent,
            img:img ? img : ""
        }
        setPost(post)
    }
    return ( 
        <div>
            <Modal 
            isOpen={isOpen} 
            setIsOpen={setIsOpen} 
            doCloseOnClickOutside={false}
            className={styles.modal}
            container="">
                
                
                <div className={styles.container}>
                    <div className={styles.exit}><SVG.Close /></div>
                    <header className={styles.header}>
                        <h2>create a post</h2>

                        <div className={styles.userBlock}>
                            userName
                            <Avatar text="I"/>
                        </div>
                    </header>
                    <div className={styles.border}></div>
                    <main className={styles.main}>
                        <input type="text" placeholder="write a name for post" className={styles.input} ref={inp}/>
                        <textarea name="" id="" placeholder="write a description" className={`${styles.input} ${styles.textarea}`} ref={text}></textarea>
                        <input type="text" className={styles.input} ref={image} placeholder="paste a link with image"/>
                    </main>
                    <footer className={styles.footer}>
                        <button className={styles.button} onClick={savePost}>save a post</button>
                    </footer>
                    
                </div>
            </Modal>
        </div>
    )
}