import React from "react";
import styles from "./header.button.module.css";
export function HeaderButton(probs: {href:string,text:string}) {
    return <div className={styles.headerButton}>
        <a href={probs.href} className={styles.headerLink}>{probs.text} </a>
        </div>
}