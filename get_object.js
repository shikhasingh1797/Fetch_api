const express = require("express");
var app = express();
app.get('/login', function (req, res) {
    res.send("Shikhu, This is login Page.")
})
app.get('/temp', function (req, res) {
    res.json({
        name: "Shikha Singh",
        age: 23,
        course: "Express",
        address: "Banglore"
    });
});
app.listen(3000, () => {
    console.log("server is running...")
});
