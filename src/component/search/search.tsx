import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import { tags } from "../postList/postList";

export default function Search() {
    const [selectedTag, SetSelectedTag] = useState("")
    const [textInSearch, SettextInSearch] = useState("")
    const [likes, setLikes] = useState(0)
    useEffect(() => {
        const postCards = document.querySelectorAll("#postCard")
        postCards.forEach((elem)=>{
            const tagBlock = (elem.querySelector("#tagBlock") as HTMLElement)
            const titleBlock = (elem.querySelector("#titleBlock") as HTMLSpanElement)
            const likesBlock = (elem.querySelector("#likesBlock") as HTMLSpanElement)

            const postCard = (elem as HTMLElement)
            console.log(likesBlock?.textContent)

            if (!titleBlock?.textContent){
                return
            }
            const doesTagIncluded = tagBlock?.innerHTML.includes(selectedTag)
            const doesNameIncluded = titleBlock?.textContent.includes(textInSearch)
            const doesLikesCountOk = Number(likesBlock?.textContent)>likes

            if (!doesTagIncluded || !doesNameIncluded || !doesLikesCountOk){
                postCard.style.display = "none"
            }else{
                postCard.style.display = "flex"
            }
        })
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
            <select name="tags" id="tags" aria-placeholder="tags" className={styles.selectMenu} onChange={(event) => {SetSelectedTag(tags[Number(event.target.value)])}}>
                {
                    tags.map((elem,index) => {
                        return <option value={index} className={styles.option}>{elem}</option>
                    })
                }
            </select>
        </div>
    </div>;
}