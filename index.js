var express=require("express");
var app=express();;
var path=require("path")
var multer=require("multer");
var upload=multer({dest:'uploads/'});
var port=process.env.PORT||8080;
app.use(express.static(path.join(__dirname,"view")));
app.post('/file-upload',upload.single('uploadFile'), function (req, res, next) {
  console.log(req.file.originalname);
  console.log(req.file.size);
  var results={
      Name:req.file.originalname,
      size: req.file.size +" bytes"
  }
  res.send(results);
})
app.listen(port,function(){
    console.log("listening on port: "+port);
})