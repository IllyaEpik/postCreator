import React from "react";
import { IProbs } from "./types";
import styles from "./avatar.module.css";

export function Avatar(probs:IProbs){
    const text = probs.text.charAt(0)
    return <div className={styles.avatarDiv}>
        {text}
    </div>
}