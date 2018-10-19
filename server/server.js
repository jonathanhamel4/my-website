const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const compression = require("compression");
const db = require("./db/models");

var app = express();

db.sequelize.sync().then(() => {
    const port = process.env.PORT || 8080;

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    const server = http.createServer(app);
    server.listen(port);
    server.on("listening", onListening);
    server.on("error", onError);
    
    app.use(compression());
    app.disable("x-powered-by");
    app.set("port", port);
    
    app.use("/api", getIndexRoute());
});

function onListening() {
    console.log("Application listening on port: " + app.get("port"));
}

function onError(error) {
    console.log(JSON.stringify(error));
}

function getIndexRoute() {
    // Routes
    const router = express.Router();

    router.get("/", (req, res) => {
        res.json("Hello World!");
    });

    return router;
}