import React from "react";

import styles from "./footer.module.css";
export function Footer() {
    return <footer id={styles.footer}>
        <a href="https://github.com/IllyaEpik/postCreator" className={styles.footerLink}>github</a>
    </footer>
}