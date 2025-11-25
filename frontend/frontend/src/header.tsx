import React from "react";
import {HeaderButton} from "./header.button";

export function Header() {
    
    return <header>
        <HeaderButton href="" text = "postCreator"/>
        <div id="pages">
            <HeaderButton href="/posts" text = "posts"/>
            <HeaderButton href="/createPost" text = "create post"/>
            <HeaderButton href="/main" text = "main"/>
            <HeaderButton href="/language" text = "english"/>
            <img src="/avatar.png" alt="avatar" />
        </div>
    </header>
}