require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const config = require("./config/config");

const app = express();

//Configuraciones
app.set("port", config.SERVER_PORT);

//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas

app.use("/person", require("./routes/person.routes"));

app.use("/session",require("./routes/session.routes"))

module.exports = app;
