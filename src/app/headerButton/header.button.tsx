import React from "react";
import styles from "./header.button.module.css";
import { Link } from "react-router-dom";
export function HeaderButton(probs: {href:string,text:string}) {
    return <div className={styles.headerButton}
    onClick={
        (event) => {

            const link = (event.target as HTMLElement).querySelector("a")
            link?.click()
        }
    }
    >
        {/* <a href={probs.href} className={styles.headerLink}> </a> */}
        <Link to={probs.href}  className={styles.headerLink}>{probs.text}</Link>
        </div>
}