import React, { useState , useEffect } from "react";
import axios, { Axios } from "axios";
import {Link, Outlet} from 'react-router-dom';
import "./Home.css"

interface ArticleContent {
    author: string;
    timeStamp: string;
    message: string;
    title: string;
    id: string;
}


function BlogPost ({title, author, timeStamp, message, id} : ArticleContent) {
    return (
        
        <div className="article-card">
            <Link to={{"pathname" :  "/articles/" + id}} style={{ textDecoration: 'none' }}>
                <div className="article-card-content">
                    <div className=" article-info">
                        <h1 className="article-title article-subhead">{title}</h1>
                        <h2 className="article-author article-subhead">Author: {author}</h2>
                        <p className="article-date article-subhead">{(new Date(parseFloat(timeStamp))).toDateString()}</p>
                    </div>
                    <p>{message.length < 500 ? message : message.substring(0, 500) + '...'}</p>
                </div>
            </Link>
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
        <div className="home-content">
            <div className="home-title">
                <h1>The <b><span className="home-Ukrainian">Ukrainian</span> <span className="home-Student">Student</span></b> Association</h1>
                
                <h2 className="home-sublogo">At <span className="home-UMD">UMD</span></h2>
            </div>
            <br></br>
            <div className="article-area">
                {
                    articles.map(article => 
                        (
                            <BlogPost author={article.author} 
                                        message={article.message}
                                        timeStamp={article.timeStamp}
                                        title={article.title}
                                        id = {article._id} /> 
                        )
                        )
                }
            </div>

        </div>
    );

}


export default Home;