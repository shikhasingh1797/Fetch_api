const express = require("express");
var app = express();
app.use(express.json())
const axios = require('axios');
const res = require("express/lib/response");
app.get('/users/:login', async(req, res) => {
        try{
            const resp = await axios.get(`https://api.github.com/users/${req.params.login}`);
            var data1 = resp.data;
            res.send(data1)
        } catch(err){
          res.status(404)
          res.send({"message":"name not found"});
          console.log("404.....")
          return ;
        }
})
app.listen(4000, () => {
    console.log('Server is working....');
})