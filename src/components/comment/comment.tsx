import React, {useState } from "react";
import { commentProbs } from "./types";
import { Avatar } from "../../shared/avatar";
import { SVG } from "../../shared";


export function Comment(probs:commentProbs) {
    const text = probs.commentText
    return (
        <div>
            <div>
                <div>
                    <Avatar text="I"/>
                    <span>illya</span>
                    <li>15 mins ago</li>

                </div>
                <div>
                    <SVG.EditButton />
                </div>
            </div>
            <p>{text}</p>
        </div>
    )
}