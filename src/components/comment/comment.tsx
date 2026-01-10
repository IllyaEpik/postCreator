import React, {useState } from "react";
import { commentProbs } from "./types";
import { Avatar } from "../../shared/avatar";
import { SVG } from "../../shared";
import styles from "./comment.module.css";

export function Comment(probs:commentProbs) {
    const text = probs.commentText
    return (
        <div className={styles.fullComment}>
            <div className={styles.head}>
                <div className={styles.userData}>
                    <Avatar text="I"/>
                    <span>illya</span>
                    <li>15 mins ago</li>
                </div>
                <div>
                    <SVG.EditButton className={styles.icon}/>
                </div>
            </div>
            <p>{text}</p>
        </div>
    )
}