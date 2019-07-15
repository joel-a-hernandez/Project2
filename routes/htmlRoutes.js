var db = require("../models");
// =============================================================
var path = require("path");
var passport=require("../config/passport");

//loads the login page
module.exports = function(app) {
 
  app.get("/",function(req,res){
    res.sendFile(path.join(__dirname, "../public/login.html"));
   });

  app.get("/login",function(req,res){
  res.sendFile(path.join(__dirname, "../public/login.html"));
 });
//loads the register page
 app.get("/register",function(req,res){
  res.sendFile(path.join(__dirname, "../public/register.html"));
 });
 
 
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};