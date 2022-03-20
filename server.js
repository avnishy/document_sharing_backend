const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//database
const db = require("./app/models");
//const Role = db.role;

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Doc Sharing Platform." });
});

//For Users Login Signup etc...
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


//For Document Upload routers
const router = require('./app/routes/documentRouter.js');
app.use('/api/document', router);


//static Images Folder
app.use('/document', express.static('./Document'))

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});