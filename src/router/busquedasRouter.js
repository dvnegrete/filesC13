const express = require("express");
const router = express.Router();
const path = require("../../routePath");

router.get("/curp", (req, res)=> {    
    res.render("findForCurp");
})

module.exports = router;