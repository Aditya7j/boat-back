require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json())
app.use(cors())
const connect = require("./config/db");
const userControllers = require("./controllers/users");
const authControllers = require("./controllers/auth");
const rockController = require("./controllers/Rock.controller");

const PORT = process.env.PORT || 4000;

app.use("/api/users",userControllers)
app.use("/api/auth",authControllers);
app.use("/products",rockController);


app.listen(PORT,async()=>{
    try{
        await connect();
        console.log(PORT);
    }

    catch(err){
        console.log(err)
    }
})