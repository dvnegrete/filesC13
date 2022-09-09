const express = require("express");
const router = express.Router();
const { uploadDocs } = require("../middlewares/multer");
const Files = require("../services/filesService");

const service = new Files();

router.post("/", uploadDocs, (req, res, next) =>{
    try {
        const URLs = service.constructorURL(req.files, req.body.curp)
        res.json(URLs)
    } catch (error) {
        next(error);        
    }
})

router.get("/buscar", (req, res)=> {
    const { curp, typeDocument } = req.query;    
    const name = `${curp.toUpperCase()}-${typeDocument}.jpeg`
    res.render("findResult", {
        titulo: "Comprobar documentación",
        render: name
    })
})

module.exports = router;