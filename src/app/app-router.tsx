import React from "react";
import {AllPosts} from "../pages/allPosts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/layout";
import {MainPage} from "../pages/main";
import { PostPage } from "../pages/PostPage";
import { CreatePost } from "../pages/createPostPage";
export function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>

                <Route path="/main" element={<MainPage/>}></Route>
                <Route path="/" element={<MainPage/>}></Route>

                <Route path="/posts" element={<AllPosts/>}></Route>
                <Route path="/post/:id" element={<PostPage/>}></Route>
                <Route path="/createPost" element={<CreatePost/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
}