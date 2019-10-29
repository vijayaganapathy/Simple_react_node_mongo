var express=require('express')
var app=express();
var mongoose=require('mongoose');
var cors=require('cors')
app.use(cors())
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var{Check}=require('./val.js');//val is val.js file name
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/Contact',{useUnifiedTopology:true,useNewUrlParser: true});
app.get("/contacts",function(req,res){
    // const www = new Check({'Name': 'somethoing', 'Number': 9999923456789})
    // www.save().then(e =>
    Check.find().then(function(data){
        console.log(data)
        res.json(data)
         
    }).catch(function(err){
        res.status(500).json({
            message:"error"
        })
    })
    });


app.listen(3000);