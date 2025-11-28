import React from "react";
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";
import styles from "./main.module.css";
export default function App() {
    return <div id={styles.body}>
        
        <Header/>
        <Main/>
        <Footer/>
    </div>;
}