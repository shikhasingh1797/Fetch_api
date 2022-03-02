const fetch=require("node-fetch")
const express = require("express");
var app = express();
async function getUserAsync(name) 
{
  let response = await fetch(`https://api.github.com/users/${name}`);
  let data = await response.json()
  console.log(data)
  app.get('/users', (req,res) =>{
    res.send(data)
})
}
getUserAsync('shikhasingh1797')
app.listen(3000, () => {
    console.log("Server is running.....")
});

