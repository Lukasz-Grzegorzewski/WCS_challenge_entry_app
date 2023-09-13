
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));


const router = require("./router");
app.use("/api", router);


app.get("./*", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));

module.exports = app;
