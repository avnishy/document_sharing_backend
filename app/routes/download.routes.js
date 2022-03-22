const express = require("express");
const router = express.Router();
const controller = require("../controllers/file.download");

let routes = (app) => {
 router.get("/files/:name", controller.download);

  app.use(router);
};

module.exports = routes;