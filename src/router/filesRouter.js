const express = require("express");
const router = express.Router();
const { updateDoc, uploadDocs } = require("../middlewares/multer");
const nameOfFile = "originalname";

router.post("/newRegister", uploadDocs, async (req, res) =>{
    try {
        // const { body } = req
        // console.log(body)
        const nameFiles = [
            req.files.actaNacimiento[0][nameOfFile],
            req.files.comprobanteDomicilio[0][nameOfFile],
            req.files.comprobanteEstudios[0][nameOfFile]
        ];        
        res.json({ message: "saveNewRegister"})
    } catch (error) {
        console.log(error)
    }
})

router.post("/updateFile", updateDoc, async (req, res) =>{
    try {
        console.log(req.file[nameOfFile])        
        res.json({ message: "saveUpdateFile"})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;