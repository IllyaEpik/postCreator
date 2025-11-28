import React from "react";


export default function Search() {
    return <div>
        <input type="text" />
        <button>search</button>
        <button>decline</button>
        <div>
            <select name="likes" id="likes" aria-placeholder="likes">
                <option value="50">likes 50</option>
                <option value="100">likes 100</option>
                <option value="150">likes 150</option>
            </select>
            <select name="tags" id="tags" aria-placeholder="tags">
                <option value="1">lol</option>
                <option value="2">funny cats</option>
                <option value="3">satana</option>
            </select>
        </div>
    </div>;
}