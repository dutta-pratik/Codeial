const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;
const expressLayout = require("express-ejs-layouts");
const db = require("./config/mongoose");


app.use(express.urlencoded({extended: true}));

app.use(cookieParser());


app.use(express.static("./assets"));

//using layout
app.use(expressLayout);

//extracting styles and script from sub-pages to layout 
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//use exress router
app.use("/", require("./routes/index"));

//setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function(err){
    if(err){
        console.log("Error : ", err);
    }
    console.log(`Server running succesfull at port: ${port}`);
});