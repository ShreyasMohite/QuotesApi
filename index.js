const { json } = require('express');
const express = require('express');


const app=express();

const quote=require("./quotes");

const port=2000;



app.get("/",(req,res)=>{
    res.send("hello shreyas")
})


app.get("/quotes/All",(req,res)=>{
    res.json(quote)
})


app.get("/quotes/random",(req,res)=>{
    const quotelen=quote.length;
    const random=Math.floor(Math.random()*quotelen);
    const data=quote[random];
    res.json(data);
})



app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})
