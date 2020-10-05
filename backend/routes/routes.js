var express = require('express');

var routes = express.Router();

var Contact = require('../model/model');

routes.get('/contacts',function(req,res,next){
    Contact.find(function(err,docs){
            res.json(docs);
    });
});

routes.get('/contact/:id',function(req,res){
    Contact.findById({_id:req.params.id},function(err,docs){
        if(err){
            res.json(err);
        }
        else{
            res.json(docs);
        }
    });
});

routes.put('/contact/:id',function(req,res,next){
    var update ={
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email
        
    };
    Contact.findByIdAndUpdate({_id:req.params.id},update,function(err,docs){
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:"update successfully"})
        }
    });
});

routes.post('/contact',function(req,res,next){
    var contact =new Contact({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email
    });

    contact.save(function(err,docs){
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:"Contact added success"})
        }
    });

    
});

routes.delete('/contact/:id',function(req,res,next){
    Contact.remove({_id:req.params.id},function(err,docs){
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:"delete success"})
        }
    });
});



module.exports = routes;