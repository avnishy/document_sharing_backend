const express = require("express");
const router = express.Router();
const documentController = require('../controllers/update.user.js')

let routes = (app) => {
    router.get("/user/:id", documentController.getOneUser);
     app.use(router);
   };
// use routers
module.exports = routes;