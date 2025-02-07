const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});

app.use(bodyParser.urlencoded({extended: true}));

//to render with css
app.use(express.static(__dirname));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});


