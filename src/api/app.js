const express = require('express');
var ObjectID = require('objectid');
const app = express();
const jsonParser = require('body-parser').json;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var cors = require('cors')
app.use(cors());

const db = mongoose.connection;

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Web server listening on: ${port}`);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

db.on('error', err => {
  console.error(`Error while connecting to DB: ${err.message}`);
});
db.once('open', () => {
  console.log('DB connected successfully!');
});

app.use(jsonParser());

app.post('/api/userDetails',function(req,res){
        console.log('req.body', req.body);
        db.collection("user").insert(req.body,function(err,obj){
            console.log("checking for the error",err);
          if(err)  res.status(400).json({success:false, sucerror:err.errors})
            else{
                res.status(200).json({success:true, message: 'Registered successfully.'})
            }
            console.log("checking for the respose in api after post",obj.ops);
        })
})

app.get('/api/userDetails',function(req,res){
        db.collection("user").find().toArray(function(err,obj){
          if(err)  res.status(400).json({success:false, sucerror:err.errors})
            else{
                res.status(200).json({success:true, message: obj})
            }
        })
})

app.put('/api/userDetails/:id', function(req,res){

        db.collection("user").update({_id:ObjectID(req.params.id)}, req.body,function(err,data){
            console.log("checking for the error...",err);
            console.log("checking for body...",req.body);


            if(err) res.status(500).json({success:false,message:'something went wrong.'})
            else{
               
                res.status(200).json({success:true, message:'updated successfully'})
            }
             console.log("updated ddata",data)
        })

});
app.get('/api/userDetails/:id', function(req,res){
    db.collection("user").find().toArray(function(err,data){
        if(err) res.status(500).json({success:false,message:'something went wrong.'})
        else{
            res.status(200).json({success:true, message:'executed successfully', data:data})
        }
    })

});

app.delete('/api/userDetails/:id', function(req,res){

        db.collection("user").remove({_id:ObjectID(req.params.id)},function(err,data){
            if(err) res.status(500).json({success:false,message:'something went wrong.'})
            else{
                res.status(200).json({success:true, message:'deleted successfully'})
            }
        })

});
app.get('/api/userDetails/:id', function(req,res){
    db.collection("user").find().toArray(function(err,data){
        if(err) res.status(404).json({success:false,message:'Data not found.'})
        else{
            res.status(200).json({success:true, message:'executed successfully', data:data})
        }
    })

});



