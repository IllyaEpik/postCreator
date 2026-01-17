import React, {useState } from "react";
import ReactQuill from "react-quill-new";
import styles from "./commentWriter.module.css";
import { useComment } from "../../hooks/useComment";
import { IProbs } from "./commentWriter.types";
const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{ 'size': ['small', false, 'large', 'huge'] }]
  ]
};
export function CommentWriter(probs:IProbs){
	const id = probs.id
    const [value, setValue] = useState('');
	const [data, loading, error, sendComment] = useComment(id)
	
    return <div className={styles.allCommentWriter}>
      		<div className={styles.smallEditor}>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css" />
				<ReactQuill theme="snow" modules={modules} value={value} onChange={setValue} />
			</div>
			{
				!loading &&
				<button type="submit" className={styles.buttonSender} onClick={() => {
					const text = value.split("<p>").join("").split("</p>").join("")
					setValue("")
					console.log(text)
					sendComment(text)	
				}}>send</button>
			}
      	</div>
}