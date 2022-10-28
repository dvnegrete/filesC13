const express = require("express");
const router = express.Router();
const { uploadDocs } = require("../middlewares/multer");
const { downloadBlob, getBlobStorage } = require("../controller/azure")
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

router.get("/render", async (req, res)=>{
    const image = await getBlobStorage("paisaje1.jpg");
    res.header("Content-Type", "image/jpg");    
    res.send(image);
})

router.get("/download", async (req, res)=>{
    const image = await getBlobStorage("paisaje1.jpg");    
    res.send(image);
})

module.exports = router;