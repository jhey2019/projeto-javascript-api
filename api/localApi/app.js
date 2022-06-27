const { application } = require("express");
const express = require("express");
const app = express();
const ApiController = require("./controller/apiController");

app.use(express.json())
app.use(express.urlencoded({extended:true})),
app.get("/local", async function(req, res){
    console.log("request feito");
    return res.json("Hello world");
});
app.get("/verifica/:id", async function(request, response) {
    const apiController = new ApiController()
    const id = request.params.id;
    const result = apiController.verificarValor(id);
    return response.json(result);

});
module.exports = app;

