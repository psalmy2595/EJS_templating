var express = require("express");
var app = express()

const PORT = process.env.PORT || 4000;
//udemy course
//root route = "/"
// res.render to input a file where we put our html code
// install ejs embedded javascript 
app.get("/" , function(req, res){
    res.render("home.ejs");
});
app.get("/fallinlovewith/:thing" , function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
    // res.send("you fell in love with " + thing )
}); 
  //another route loop post
  app.get("/posts", function(req, res){
      var posts = [
          {title: "post 1", author: "susy" },
          {title: "my adorable bunny", author: "charlie" },
          {title: "can you believe this pomsky", author: "susy" },
      ];
      res.render("posts.ejs", {posts: posts});
  })

app.listen(PORT);
 