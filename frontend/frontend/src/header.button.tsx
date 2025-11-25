import React from "react";

export function HeaderButton(probs: {href:string,text:string}) {
    return <div className="headerButton">
        <a href={probs.href}>{probs.text}</a>
        </div>
}