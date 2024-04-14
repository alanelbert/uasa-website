import React, { useState , useEffect } from "react";
import axios, { Axios } from "axios";
import {Link, Outlet} from 'react-router-dom';
import "./Home.css"

interface ArticleContent {
    author: string;
    timeStamp: string;
    img : string;
    message: string;
    title: string;
    id: string;
}


function BlogPost ({title, author, timeStamp, img, message, id} : ArticleContent) {
    return (
        
        <div className="article-card">
            <Link to={{"pathname" :  "/articles/" + id}} style={{ textDecoration: 'none' }}>
                <div className="article-card-content">
                    <div className=" article-info">
                        <h1 className="article-title article-subhead">{title}</h1>
                        {
                            img != "" &&
                            <img src={img} className="article-image"></img>
                        }

                        {
                            author != "" &&
                            <h2 className="article-author article-subhead">Author: {author}</h2>
                        }
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

                <BlogPost author={""}
                                message = {'Join the Candlelight Vigil for Ukraine at McKeldin Mall near the sundial from 4 to 5 pm on Thursday, February 23rd to honor the victims of the war in Ukraine. This day will mark a year of a full-scale war in Ukraine. This war has resulted in significant losses of human life and millions of displaced people as well as endangered democracy in Europe and the entire world.\nWith this event, the Ukrainian Student Association would like to honor the victims of the war and share how we feel now, a year after. We would also like to unite and thank the UMD community for the continuing support of Ukraine, the Ukrainian people, and Ukrainian UMD students.\nSadly, the ongoing war continues to bring suffering to millions of people every day. We, therefore, encourage the UMD community to continue taking action and reach out to UASA about the ways you can help.\nPlease, help spread the word about the event. You can bring flowers and/or donate to UASA to help the people of Ukraine.'}
                                img = '/vigil.jpeg'
                                timeStamp="1676021954454"
                                id = {"vigil-article"}
                                title={"UASA Vigil"}

                            />
                {

                    
                    articles.map(article => 
                        (
                            <BlogPost author={article.author} 
                                        message={article.message}
                                        timeStamp={article.timeStamp}
                                        title={article.title}
                                        img = {""}
                                        id = {article._id} /> 
                        )
                        )
                }
            </div>

        </div>
    );

}


export default Home;