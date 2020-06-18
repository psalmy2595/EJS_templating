var express = require("express");
var app = express();
//express will serve the content inpublic directory
app.use(express.static('public'));
//to import & tell express that our res.render files is ejs so we do not imput the extension when calling it
app.set("view engine", "ejs");
const PORT = process.env.PORT || 4000;
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
 