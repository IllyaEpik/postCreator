import React, {useState } from "react";
// import styles from "./commentWriter.module.css";
// import { tags } from "../postList/postList";
// import { IProbs } from "./types";
// import {SVG} from "../../shared/svg";
// import { useFetch } from "../../hooks/useFetch";
import ReactQuill from "react-quill-new";
import styles from "./commentWriter.module.css";
// import 'react-quill/dist/quill.snow.css';
// const ReactQuill = dynamic(() => import('react-quill'), { 
//   ssr: false,
//   loading: () => <p>Loading Editor...</p>
// });

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{ 'size': ['small', false, 'large', 'huge'] }]
  ]
};
// const formats = [
//     'header',
//     'bold'
// ]
export function CommentWriter(){
    const [value, setValue] = useState('');

    return <div className={styles.smallEditor}>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css" />
        <ReactQuill theme="snow" modules={modules} value={value} onChange={setValue} />
        </div>
}