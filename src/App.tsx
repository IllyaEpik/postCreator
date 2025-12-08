import React from "react";
import { Header } from "./component/header/header";
import { Main } from "./component/main/main";
import { Footer } from "./component/footer/footer";
import styles from "./App.module.css";
import PostList from "./component/postList/postList";
export default function App() {
    return <div id={styles.body}>
        
        <Header/>
        <Main><PostList/></Main>
        <Footer/>
    </div>;
}