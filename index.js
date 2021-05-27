const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const task = require('./models/task')

//Config
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main',

        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
        
     } ))
        app.set('view engine', 'handlebars')
    //Body Parser
        app.use(express.urlencoded({extended: false}))
        app.use(express.json())
        
//Rotas
   /* app.get('/', function(req,res){
       task.findAll().then(function(tarefas){
            console.log(tarefas)
            res.render('teste',{tarefas:tarefas})
    

        
    })})*/
    app.get('/',function(req,res){ 
        task.findAll().then(function(tarefas){
            console.log(tarefas)
            res.render('home',{tarefas:tarefas})
        })
    })
    app.post('/addTarefa',function(req,res){
        task.create({
            nomes:req.body.nomes,
            horas:req.body.horas,
            intervalos:req.body.intervalos,
            replays:req.body.replays=='on',
            domingos:req.body.domingos=='on',
            segundas:req.body.segundos=='on',
            tercas:req.body.tercas=='on',
            quartas:req.body.quartas=='on',
            quintas:req.body.quintas=='on',
            sextas:req.body.sextas=='on',
            sabados:req.body.sabados=='on'
        }).then(function()
        {
           res.redirect('/')
        }).catch(function(erro)
        {
            if(req.body.domingos == 'on')
                console.log("ocorreu o seguinte erro: "+ req.body.domingos)
        })
    })

app.listen(12000, function(){
    console.log("Servidor rodando na url http://localhost:12000");
})