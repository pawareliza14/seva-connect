const express = require("express")
const app = express()
const bcrypt = require("bcrypt")

const users = []
const port = process.env.PORT || 5000;
app.use(express.urlencoded({extended: false}))


app.get("/service", async(req,res) => {
    res.render("service.ejs")
})

app.get('/', (req,res) =>{
    res.render("index.ejs")
})

app.get('/login', (req,res) =>{
    res.render("login.ejs")
})

app.get('/register', (req,res) => {
    res.render("register.ejs")
})
app.get('/user',(req,res) => {
    res.render('user.ejs')
})

app.listen((port), () => {
    console.log(`app is listening on port ${port}`);
})