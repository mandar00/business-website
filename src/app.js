const express = require('express');
require('./db/conn');
const app = express()
const port = process.env.PORT || 3000
const path = require('path');
const hbs = require('hbs');

const static_path= path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")

app.set("view engine" ,"hbs")
app.set("views",template_path)

app.use(express.static(static_path))
hbs.registerPartials(partials_path)

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/services",(req,res)=>{
    res.render("services")
})
app.get("/portfolio",(req,res)=>{
    res.render("portfolio")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.listen(port,()=>{
    console.log(`listening to port  ${port}`)
})