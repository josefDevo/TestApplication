var express = require("express");
var app = express();
var port = 5000;

app.use(express.static(__dirname + "/src"));
app.use(sendViewMiddleware);

app.listen(port);

console.log("Running at Port 5000");

function sendViewMiddleware(req, res, next) {
    res.sendView = function(view) {
        return res.sendFile(__dirname + "/src/views/" + view);
    };
    next();
}

app.get('/',function(req,res) {
    res.sendView('teachermain.html');
});

// app.get('/login',function(req,res) {
//     res.sendView('login.html');
// });