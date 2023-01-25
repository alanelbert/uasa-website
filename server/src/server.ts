import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import mongoose from 'mongoose';

import blogModel from './blogModel.js';

const app=express();
const port = 9000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())



const connection = "mongodb://db:27017/uasa_content";


mongoose.connect(connection).then(() => {
    console.log('successfully connected to the database');



}).catch(err => {
    console.log('error connecting to the database');
    console.log(err)
    process.exit();
});



app.get('/v1/blogs', (req,res) => {
    console.log('connecting to route route "/blogs"')

    blogModel.find((err, data) => {
        if (!err) {
            console.log(typeof(data))
            
            console.log(data)    
                            
            // 201 -> created 
            res.status(201).send(data)
            

        } else {
            console.log(err)
            res.status(500).send(err)
        }

    });
})


app.post('/v1/blogs', (req, res) => {
    
    console.log("Adding blog")

    blogModel.create(req.body, (err, data) => {
        if (!err) {
            console.log("Entry successful!")
            console.log(req.body)
            console.log(data)
            res.status(201).send(data)
        } else {
            console.log('Entry unsuccessful')
            console.log(err)
        }
    })

})



app.listen(port, () => console.log(`Listening on port : ${port}`))