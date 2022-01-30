const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true})),
app.get("/local", async function(req, res){
    console.log("request feito");
    return res.json("Hello world");
});
module.exports = app;

