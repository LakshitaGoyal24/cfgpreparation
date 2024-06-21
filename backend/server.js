
const express = require("express");
const mongoose = require("mongoose");

//express app
const app = express();


//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next();
})



//connect to db
mongoose.connect("mongodb+srv://anushkaa0418:hello1234@merntut.h3jfmr6.mongodb.net/")
    .then(() => {
        //listen to requests
        app.listen(3000, () => {
            console.log("connected to db and Listening");
        })
    })
    .catch((error) => {
        console.log(error)
    })
