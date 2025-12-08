import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import { tags } from "../postList/postList";

export default function Search() {
    const [selectedTag, SetSelectedTag] = useState("")
    useEffect(() => {
        const postCards = document.querySelectorAll("#postCard")
        postCards.forEach((elem)=>{
            const tagBlock = (elem.querySelector("#tagBlock") as HTMLElement)
            if (!tagBlock?.innerHTML.includes(selectedTag)){
                console.log("hello")
            }else{
                console.log("lol")

            }
        })
    }, [selectedTag])
    return <div className={styles.fullSearchBlock}>
        <div className={styles.searchDiv}>
            <input type="text" className={styles.searchInput} placeholder="write post name"/>
            <button className={styles.searchButton}>search</button>
        </div>
        
        {/* <button>decline</button> */}
        <div className={styles.menuList}>
            <select name="likes" id="likes" aria-placeholder="likes" className={styles.selectMenu}>
                <option value="50">likes 50</option>
                <option value="100">likes 100</option>
                <option value="150">likes 150</option>
            </select>
            <select name="tags" id="tags" aria-placeholder="tags" className={styles.selectMenu} onChange={(event) => {SetSelectedTag(tags[Number(event.target.value)])}}>
                {
                    tags.map((elem,index) => {
                        return <option value={index}>{elem}</option>
                    })
                }
            </select>
        </div>
    </div>;
}