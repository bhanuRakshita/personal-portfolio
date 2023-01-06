const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});

app.use(bodyParser.urlencoded({extended: true}));

//to render with css
app.use(express.static(__dirname));

//connection to db
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/portfolioDB');

//creating a schema
const messageSchema = {
  name: String,
  email: String,
  subject: String,
  purpose: String,
  message: String,
  pay: Number
};

//creating mongoose.model
const Message = mongoose.model("Message", messageSchema);

app.get("/loadingPage", (req, res)=>{
    res.sendFile(__dirname+"/loadingPage.html");
});

app.get("/portfolio", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req,res)=>{
    const message = new Message({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        purpose: req.body.purpose,
        message: req.body.message,
        pay: req.body.payRate
    });

    message.save();
    res.redirect("/#contact");
})
