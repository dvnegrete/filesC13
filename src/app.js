const express = require("express");
const routePath = require("../routePath")
const routerAPI = require("./router");
const cors = require("cors");
const {logsError, errorHandler } = require("./middlewares/errorHandler")

const { corsHandler } = require("./middlewares/corsHandler");

const app = express();
app.use(corsHandler);
app.use(cors());

app.set("view engine", "ejs");
app.set("views", routePath +"/src/views");

app.use(express.static(routePath + "/public"));

app.use(express.json());
routerAPI(app)

app.use(logsError)
app.use(errorHandler)

module.exports = app;