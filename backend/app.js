const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/ok",(req,res)=>{
    res.send("Working")
})

module.exports = app;
