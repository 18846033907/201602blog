var express = require('express');
var router = express.Router();
var Todo=require('../models');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/todos',function(req,res,next){
  Todo.find({},function(err,docs){
    if(err){
      console.log(err)
    }
    res.send(docs)
  })
})

router.post('/todos',function(req,res,next){
  var todo=req.body;
  Todo.create(todo,function(err,docs){
    if(err){
      console.log(err)
    }
    res.send(docs)
  })
})

router.post('/todos/batch',function(req,res,next){
  var ids=req.body.ids;
  Todo.remove({_id:{$in:ids}},function(err,doc){
    if(err){
      console.log(err)
    }
    res.send({})
  })
})
module.exports = router;
