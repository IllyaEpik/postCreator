import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
// import { tags } from "../postList/postList";
import { IProbs } from "./types";
import { IPost, ITags } from "../../shared/dbTypes";
import { useFetch } from "../../hooks/useFetch";

export function Search(probs:IProbs) {
    const [selectedTag, SetSelectedTag] = useState("any")
    const [textInSearch, SettextInSearch] = useState("")
    const [likes, setLikes] = useState(0)
    const {setFilteredPosts, posts} = probs
    const [postsData, loadingPosts, postError,refreshPosts ] = useFetch<IPost[]>('http://127.0.0.1:8888/posts/all')
    const [tagsData, tagsLoading, tagError,refreshTags ] = useFetch<ITags[]>('http://127.0.0.1:8888/tags/all')
    useEffect(() => {
            refreshPosts()
            
            
            
        },[textInSearch,likes,selectedTag])
    useEffect(()=>{
        // if (loadingPosts!==true){
        //     return
        // }
        if (postsData) {
                const passedPosts = postsData.filter((post) => {
                    if (!(post.name.includes(textInSearch))){
                        return false
                    }
                    if (post.likes<likes){
                        return false
                    }
                    if (!(post.tags.includes(selectedTag)) && selectedTag!="any"){
                        return false
                    }
                    return true
                })
                setFilteredPosts(passedPosts);
            }
        
    },[postsData,loadingPosts,postError])

        
    // }, [selectedTag,textInSearch,likes])
    return <div className={styles.fullSearchBlock}>
        <div className={styles.searchDiv}>
            <input type="text" className={styles.searchInput} placeholder="write post name" id="searchInput"/>
            <button className={styles.searchButton} onClick={(event) => {
                const text = (document.querySelector("#searchInput") as HTMLInputElement)?.value
                SettextInSearch(text)
                }}>search</button>
        </div>
            {
                !postError ?
                <div className={styles.menuList}>
                    <select name="likes" id="likes" aria-placeholder="likes" className={styles.selectMenu}
                    onChange={(event) => {setLikes(Number(event.target.value))}}>
                        <option value="0" className={styles.option}>likes 0</option>
                        <option value="50" className={styles.option}>likes 50</option>
                        <option value="100" className={styles.option}>likes 100</option>
                        <option value="150" className={styles.option}>likes 150</option>
                    </select>
                    <select name="tags" id="tags" aria-placeholder="tags" className={styles.selectMenu} onChange={(event) => {SetSelectedTag(event.target.value)}}>
                        {

                            tagsData ? tagsData.map((elem,index) => {
                                return <option value={elem.name} key={index} className={styles.option}>{elem.name}</option>
                            }) : ''
                        }
                        <option value="any" className={styles.option}>any</option>
                    </select>
                </div> : 
                <div className={styles.displayError}>happened error</div>
            }
            
    </div>;
}