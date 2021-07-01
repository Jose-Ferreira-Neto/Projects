//Carregando módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const path = require('path')
const mongoose = require('mongoose')
//configurações
    //Body-parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    //Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Mongoose
        mongoose.Promise = global.Promise
        mongoose.connect("mongodb://localhost/clientes", {useUnifiedTopology: true, useNewUrlParser: true}).then(()=>{
            console.log("MONGO DB NO AR");
        }).catch((err)=>{
            console.log(err)
        })
    //Public
        app.use(express.static(path.join(__dirname,'public')))
//Rotas
    app.use('/admin', admin)

//Outras
const port=8881
app.listen(port, ()=>{
    console.log("SERVIDOR NO AR");
})