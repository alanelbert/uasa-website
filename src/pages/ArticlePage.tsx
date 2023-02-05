
import React, { useState , useEffect } from "react";
import axios, { Axios } from "axios";
import {Link, Outlet, useParams} from 'react-router-dom';




interface ArticleContent {
    author: string;
    timeStamp: string;
    message: string;
    title: string;

}


function ArtPost ({title, author, timeStamp, message} : ArticleContent) {
    return (
        
        <div className="">
           
            <div className="">
                <div className="">
                    <h1 className="">{title}</h1>
                    <h2 className="">Author: {author}</h2>
                    <p className="">{(new Date(parseFloat(timeStamp))).toDateString()}</p>
                </div>
                <p>{message}</p>
            </div>
       
        </div>
        
    )
}

function ArticleContent() {

    const aId = useParams().id;
    const [article , setArticle] = useState<ArticleContent>({ 'author': '', 'title' : '', 'message' : '', 'timeStamp' : '0'});

    useEffect(() => {
        const url : string = "http://localhost:9000/v1/blogs/" + aId;
        axios.get(url).then(res => {

            const articles = res.data
            console.log(articles)


            setArticle(articles)
        })
    }, [])

    return (
    <div>
         <ArtPost author={article.author} 
                        message={article.message}
                        timeStamp={article.timeStamp}
                        title={article.title}
                         /> 
    </div>);

}

export default ArticleContent;