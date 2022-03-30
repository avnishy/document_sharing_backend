const express = require("express");
const router = express.Router();
const userController = require("../controllers/update.user.js");

let routes = (app) => {
  router.put("/user/:id", userController.updateuser);
  router.delete("/user/:id", userController.deleteuser);
  app.use(router);
};


module.exports =routes;
