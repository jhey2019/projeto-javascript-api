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
app.get("/aprov/:id1/:id2/:id3/:id4/:id5", async function(request, response){
    const id1 = request.params.id1;
    const id2 = request.params.id2;
    const id3 = request.params.id3;
    const id4 = request.params.id4;
    const id5 = request.params.id5;
    const apiController = new ApiController();
    const result = apiController.aprovValor(id1, id2, id3, id4, id5);
    return response.json(result);
});

app.get("/ver/:id1/:id2", async function(request, response) {
    const id1 = request.params.id1;
    const id2 = request.params.id2;
    const apiController = new ApiController();
    const result = apiController.verValor(id1, id2);
    return response.json(result);
});

app.get("/calc", async function(request, response) {
    /* criar um calculadora que receba dois numeros e a operacao pela QUERY,
     verificar a operacao (soma, subtracao, divisao, multiplica ) realiza o calculo e retorna para o usuario*/
    const num1 = request.query.num1;
    const num2 = request.query.num2;
    const operacao = request.query.operacao;
    const apiController = new ApiController();
    const result = apiController.calcular(num1, num2,operacao );
    return response.json(result);

});

app.get("/pessoas", async function(req, res) {
    const nome = req.query.nome;
    const idade = req.query.idade;
    const sexo = req.query.sexo;
    const apiController = new ApiController();
    const result = apiController.incluir(nome, idade, sexo );

    return res.json(result)
});

app.post("/pessoas", async function(req, res) {
    const nome = req.query.nome;
    const idade = req.query.idade;
    const sexo = req.query.sexo;
    const apiController = new ApiController();
    const result = apiController.cadastrar(nome, idade, sexo);

    return res.json(result);
    
});

module.exports = app;