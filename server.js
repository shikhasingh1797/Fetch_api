var express=require("express");
var app=express();
var myroutes=require('./myroutes.js')
app.use('/myroutes',myroutes)
app.listen(3000, () => {
    console.log("Server is running.....")
});    