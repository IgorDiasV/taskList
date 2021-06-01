const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const task = require('./models/task');
const check_task = require("./models/check_task");
var id;
var teste;
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
        check_task.findAll().then(function(a){
            teste=a
        })
        task.findAll().then(function(tarefas){
            res.render('home',{tarefas:tarefas,teste:teste})
        })
    })
    app.post('/addTarefa',function(req,res){
        
        task.create({
            nomes:req.body.nomes,
            horas:req.body.horas,
            intervalos:req.body.intervalos,
            replays:req.body.replays=='on',
            domingos:req.body.domingos=='on',
            segundas:req.body.segundas=='on',
            tercas:req.body.tercas=='on',
            quartas:req.body.quartas=='on',
            quintas:req.body.quintas=='on',
            sextas:req.body.sextas=='on',
            sabados:req.body.sabados=='on'
        }).then(result => id=result.id)
        setTimeout(function(){
            check_task.create({
            id_check:id,
            domingos:false,
            segundas:false,
            tercas:false,
            quartas:false,
            quintas:false,
            sextas:false,
            sabados:false
        }
        ).then(function()
        {
           res.redirect('/')
        }).catch(function(erro)
        {
            console.log("ocorreu o seguinte erro: "+ erro)
        })
    },3000)
        
        
    })

    check_task.findByPk(28).then(function(a){
            console.log(a.id_check)
        }
    )

app.listen(12000, function(){
    console.log("Servidor rodando na url http://localhost:12000");
})