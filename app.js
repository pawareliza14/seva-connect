const express = require("express")
const app = express()
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const router = require('./routes/userRoutes')

const users = []
const port = process.env.PORT || 5000;
app.use(express.json());
// app.use(express.urlencoded({ extended: false }))
app.use('/api/users',router);


app.get("/service", async (req, res) => {
    res.render("service.ejs")
})

app.get('/', (req, res) => {
    res.render("index.ejs")
})

app.get('/login', (req, res) => {
    res.render("login.ejs")
})

app.get('/register', (req, res) => {
    res.render("register.ejs")
})
app.get('/user', (req, res) => {
    res.render('user.ejs')
})

app.get('*', (req,res) => {
    res.send("404 not found");
})


const start = async () => {
    try {
        mongoose.set('strictQuery',false);
        await mongoose.connect("mongodb://0.0.0.0:27017/sevaConnect");
        console.log(`connected to database..`);
        app.listen((port), () => {
            console.log(`app is listening on port ${port}`);
        })
    }catch(err){
        console.log(err);
    }

}

start();