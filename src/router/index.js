const express = require("express");
const files = require("./filesRouter");
const docs = require("../../docsRoute")

function routerAPI(app){
    const router = express.Router();
    app.use("/", router)
    
    router.get("/prueba", (req, res)=> {        
        res.send("ServerFiles");        
    })

    router.use("/files", files)
}

module.exports = routerAPI;