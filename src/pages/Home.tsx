import React, { useState , useEffect } from "react";
import axios, { Axios } from "axios";

interface ArticleContent {
    author: string;
    timeStamp: string;
    message: string;
    title: string;
}


function BlogPost ({title, author, timeStamp, message} : ArticleContent) {
    return (
        <div>
            <h1>{title}</h1>
            <h2>Author: {author}</h2>
            <h3>Date: {timeStamp}</h3>
            <p>{message}</p>
        </div>
    )
}

function Home() {

    const [articles , setArticle] = useState<any[]>([]);

    useEffect(() => {
        const url : string = "http://localhost:9000/v1/blogs"
        axios.get(url).then(res => {

            const articles = res.data
            console.log(articles)


            setArticle(articles)
        })
    }, [])




    return (
        <div>
            <h1>Welcome to UASA</h1>

            <div>
                {
                    articles.map(article => 
                        (
                            <BlogPost author={article.author} 
                                        message={article.message}
                                        timeStamp={article.timeStamp}
                                        title={article.title} /> 
                        )
                        )
                }
            </div>

        </div>
    );

}


export default Home;