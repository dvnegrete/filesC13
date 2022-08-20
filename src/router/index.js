const express = require("express");
const files = require("./filesRouter");
const busquedas = require("./busquedasRouter");

function routerAPI(app){
    const router = express.Router();
    app.use("/", router)
    
    router.get("/prueba", (req, res)=> {        
        res.send("ServerFiles");        
    })

    router.use("/files", files);
    router.use("/busquedas", busquedas)
}

module.exports = routerAPI;