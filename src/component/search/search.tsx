import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import { tags,posts } from "../postList/postList";
import { IProbs } from "./types";

export default function Search(probs:IProbs) {
    const [selectedTag, SetSelectedTag] = useState(0)
    const [textInSearch, SettextInSearch] = useState("")
    const [likes, setLikes] = useState(0)
    const setFilteredPosts = probs.setFilteredPosts
    useEffect(() => {
        const filteredPosts = posts.filter((post)=>{
            if (!post.tags.includes(selectedTag)){
                return false
            }
            if (!post.title.includes(textInSearch)){
                return false
            }
            if (post.likes < likes){
                return false
            }
            return true
        })
        setFilteredPosts(filteredPosts)
    }, [selectedTag,textInSearch,likes])
    return <div className={styles.fullSearchBlock}>
        <div className={styles.searchDiv}>
            <input type="text" className={styles.searchInput} placeholder="write post name" id="searchInput"/>
            <button className={styles.searchButton} onClick={(event) => {
                const text = (document.querySelector("#searchInput") as HTMLInputElement)?.value
                SettextInSearch(text)
                }}>search</button>
        </div>
        <div className={styles.menuList}>
            <select name="likes" id="likes" aria-placeholder="likes" className={styles.selectMenu}
             onChange={(event) => {setLikes(Number(event.target.value))}}>
                <option value="50" className={styles.option}>likes 50</option>
                <option value="100" className={styles.option}>likes 100</option>
                <option value="150" className={styles.option}>likes 150</option>
            </select>
            <select name="tags" id="tags" aria-placeholder="tags" className={styles.selectMenu} onChange={(event) => {SetSelectedTag(Number(event.target.value))}}>
                {
                    tags.map((elem,index) => {
                        return <option value={index} className={styles.option}>{elem}</option>
                    })
                }
            </select>
        </div>
    </div>;
}