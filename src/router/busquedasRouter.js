const express = require("express");
const router = express.Router();
const path = require("../../routePath");

router.get("/curp", (req, res)=> {
    console.log("Llegando a busqueda por CURP")
    res.render("findForCurp");
})

module.exports = router;