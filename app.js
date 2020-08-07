//import packages and require
var express = require("express");
var app = express();
const PORT = process.env.PORT || 4000;
var bodyParser = require("body-parser");
//tell express to take the req.body and turn it into a javascript object for us to use called request.body
app.use(bodyParser.urlencoded({ extended:true }));

// express will serve the content in public directory. it makes very thing on the public directory general  
app.use(express.static('public'));
// to import & tell express that our res.render files is ejs so we do not imput the extension when calling it
app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "pierre", "Lily"];


app.post("/addfriend",function(req, res){
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
    res.redirect("/friends")
});
// install body parser  
app.get("/friends", function(req, res){
res.render("friends",{friends: friends});
});


//udemy course
//root route = "/"
// res.render to input a file where we put our html code
// install ejs embedded javascript 
app.get("/" , function(req, res){
    res.render("home");
});
app.get("/fallinlovewith/:thing" , function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
    // res.send("you fell in love with " + thing )
}); 
  //another route loop post
  app.get("/posts", function(req, res){
      var posts = [
          {title: "post 1", author: "susy" },
          {title: "my adorable bunny", author: "charlie" },
          {title: "can you believe this pomsky", author: "susy" },
      ];
      res.render("posts", {posts: posts});
  })


app.listen(PORT);
 