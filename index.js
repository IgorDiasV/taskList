const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const task = require('./models/task')

//Config
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Body Parser
        app.use(express.urlencoded({extended: false}))
        app.use(express.json())
        
//Rotas
    app.get('/', function(req,res){
        res.render('home')
    })

app.listen(12000, function(){
    console.log("Servidor rodando na url http://localhost:12000");
})