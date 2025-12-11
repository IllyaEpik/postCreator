import React from "react";
import PostList from "./component/postList/postList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/layout";
import MainPage from "./pages/main/main";
export default function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>

                <Route path="/main" element={<MainPage/>}></Route>

                <Route path="/posts" element={<PostList/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    
}