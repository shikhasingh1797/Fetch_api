const express = require("express");
var app = express();
app.use(express.json())
const axios = require('axios');
const res = require("express/lib/response");
const sendGetRequest = async () => {
    try {
        const resp = await axios.get('https://api.github.com/users');
        var data1=resp.data;
    } catch (err) {
        console.log({"statusCode":404})
    }
    app.get('/:login', function (req, res) {
        var login_id=req.params.login        
        var i=0
        while(i<data1.length-1){
            if(login_id===data1[i]["login"]){
                break
            }
            i++
        }
        if(login_id===data1[i]["login"]){
            res.send(data1[i])
        }
        else{
            res.send({
                "statusCode":404
            })
        }
    })
    app.listen(3000, () => {
        console.log("Server is running.....")
    });    
};
sendGetRequest();