const express = require("express");
const files = require("./filesRouter");
const busquedas = require("./busquedasRouter");

function routerAPI(app){
    const router = express.Router();
    app.use("/", router)
    
    router.get("/", (req, res)=> {
        res.json({status: true});
    })

    router.use("/files", files);
    router.use("/busquedas", busquedas)
}

module.exports = routerAPI;