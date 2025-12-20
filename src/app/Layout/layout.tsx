import React from "react";
import { Header } from "../header/header";
import { Main } from "../main/main";
import { Footer } from "../footer/footer";
import styles from "./layout.module.css";
import { Outlet } from "react-router-dom";
export default function Layout() {
    return <div id={styles.body}>
        
        <Header/>
        <Main>
            <Outlet></Outlet>
        </Main>
        <Footer/>
    </div>;
}