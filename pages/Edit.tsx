import React, { useState } from "react";
import axios from "axios";
import { time } from "console";




function CreatePost() {

    const [textContent, setTextContent] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("")

    return (
        <div>
            Title: <input id="title" onChange={(e) => {
                    setTitle(e.target.value);
            }}></input>

            <br></br>
            Author: <input id="title" onChange={(e) => {
                    setAuthor(e.target.value);
            }}></input>
            <br></br>
            <textarea onChange={(e) => {
                    setTextContent(e.target.value);
            }}></textarea>
            <br></br>
            <button onClick={e => {
                const url : string = "http://localhost:9000/v1/blogs";
                axios.post(url, {
                    "headers": {
                        "content-type": "application/json"
                    },

                    "message": textContent,
                    "author": author,
                    "timeStamp": Date.now().toString(),
                    "title": title
                }).then((res) => {
                    if (res.status == 201) {
                        alert("Post Successful!")
                    } else {
                        alert("Post error!")
                    }
                })


            }}>Submit</button>
        </div>
    )
}


export default CreatePost;