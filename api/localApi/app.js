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
    const apiController = new ApiController();
    const id = request.params.id;
    const result = apiController.verificarValor(id);
    return response.json(result);

});
app.get("/soma/:id1/:id2", async function(request, response) {
    const id1 = request.params.id1;
    const id2 = request.params.id2;
    const apiController = new ApiController();
    const result = apiController.somarValor(id1, id2);
    return response.json(result);
});
app.get("/mult/:id1/:id2", async function(request, response){
    const id1 = request.params.id1;
    const id2 = request.params.id2;
    const apiController = new ApiController();
    const result = apiController.multValor(id1, id2);
    return response.json(result);
});
app.get("/divi/:id1/:id2", async function(request, response){
    const id1 = request.params.id1;
    const id2 = request.params.id2;
    const apiController = new ApiController();
    const result = apiController.diviValor(id1, id2);
    return response.json(result);
});
app.get("/media/:id1/:id2/:id3", async function(request, response){
    const id1 = request.params.id1;
    const id2 = request.params.id2;
    const id3 = request.params.id3;
    const apiController = new ApiController();
    const result = apiController.mediaValor(id1, id2, id3);
    return response.json(result);
});

module.exports = app;

