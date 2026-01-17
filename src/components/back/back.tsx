import React, { useEffect, useState } from "react";
import styles from "./back.module.css";
// import { tags } from "../postList/postList";
// import { IProbs } from "./types";
import {SVG} from "../../shared/svg";
// import { useFetch } from "../../hooks/useFetch";


export function Back() {
    return (
        <div className={styles.backContainer}>
            <div className={styles.backDiv}>
                <SVG.backArrow className={styles.backArrow}/>
                <span>back
                    
                </span>
            </div>

        </div>
    )
}