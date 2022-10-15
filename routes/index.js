var express = require('express');
var router = express.Router();
const userModel = require('./users');

router.get('/', function (req, res, next) {
  userModel.find()
  .then(function(data){
    res.render('index',{data});
  })
  
});

router.post('/create', function (req, res, next) {
  userModel.create({
    task: req.body.task
  })
  .then(function(data){
    res.redirect("/")
  })
  .catch(function(err){
    res.send(err);
  })
});
router.get('/delete/:id', function (req, res) {
  userModel.findOneAndDelete( { _id: req.params.id })
      .then(function (deleted) {
          res.redirect('/');
      });
});


module.exports = router;
