
import React, { useState , useEffect } from "react";
import axios, { Axios } from "axios";
import {Link, Outlet, useParams} from 'react-router-dom';




interface ArticleContent {
    author: string;
    timeStamp: string;
    message: string;
    title: string;
    image : string;
}


function ArtPost ({title, author, timeStamp, message, image} : ArticleContent) {
    return (
        
        <div className="">
           
            <div className="">
                <div className="">
                    <h1 className="">{title}</h1>
                    <p className="">{(new Date(parseFloat(timeStamp))).toDateString()}</p>
                    {
                    author != "" &&
                    <h2 className="">Author: {author}</h2>
                    }
                    {
                        image != "" &&
                        <img src={image}></img>
                    }
                    
                </div>
                <p>{message}</p>
            </div>
       
        </div>
        
    )
}

function ArticleContent() {

    const aId = useParams().id;
    const [article , setArticle] = useState<ArticleContent>({ 'author': '', 'title' : '', 'message' : '', 'timeStamp' : '0', 'image':""});

    useEffect(() => {
        const url : string = "http://localhost:9000/v1/blogs/" + aId;
        axios.get(url).then(res => {

            const articles = res.data
            console.log(articles)


            setArticle(articles)
        })
    }, [])

    if (aId == "vigil-article") {
        return (
            <div>
            <ArtPost message={'Join the Candlelight Vigil for Ukraine at McKeldin Mall near the sundial from 4 to 5 pm on Thursday, February 23rd to honor the victims of the war in Ukraine. This day will mark a year of a full-scale war in Ukraine. This war has resulted in significant losses of human life and millions of displaced people as well as endangered democracy in Europe and the entire world.\nWith this event, the Ukrainian Student Association would like to honor the victims of the war and share how we feel now, a year after. We would also like to unite and thank the UMD community for the continuing support of Ukraine, the Ukrainian people, and Ukrainian UMD students.\nSadly, the ongoing war continues to bring suffering to millions of people every day. We, therefore, encourage the UMD community to continue taking action and reach out to UASA about the ways you can help.\nPlease, help spread the word about the event. You can bring flowers and/or donate to UASA to help the people of Ukraine.'} 
                        author={""}
                        timeStamp={"1676021954454"}
                        title={"UASA Candlelight Vigil"}
                        image={"/imageflyer.jpeg"}
                         /> 
            </div>
        )
        
    } else if (aId == "concert") {
        return (
            <div>
            <ArtPost message={'Join us for the UASA concert!'} 
                        author={""}
                        timeStamp={"1713112713000"}
                        title={"UASA Concert"}
                        image={"/concert.jpg"}
                         /> 
            </div>
        )
    }

    return (
    <div>
         <ArtPost author={article.author} 
                        message={article.message}
                        timeStamp={article.timeStamp}
                        title={article.title}
                        image={""}
                         /> 
    </div>);

}

export default ArticleContent;