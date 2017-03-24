var express = require('express');
var router = express.Router();
var mongo=require("mongoskin")
//var db=require("mongoskin").db("mongodb://localhost:27107/studentMS");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/student',function (req,res,next) {
    var db = mongo.db("mongodb://localhost:27017/studentMS", {native_parser:true});
    db.bind('student');
    db.student.find({"name":"zhangsan"}).toArray(function(err, items) {
        res.render("student/list",{"list":items});
        db.close();
    });
});
module.exports = router;
