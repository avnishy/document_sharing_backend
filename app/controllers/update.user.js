const db = require("../models");

const User = db.user;

const updateuser = async (req, res) => {

    let id = req.params.id
    const user = await User.update(req.body, { where: { id: id }})
    res.status(200).send(user)
  };

const getOneUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.findOne({ where: { id: id } });
  res.status(200).send(user);
};

const deleteuser = async (req, res) => {
  let id = req.params.id;
  let user = await User.destroy({ where: { id: id } });
  res.status(200).send("user Deleted Successfully");
};

module.exports = {
  getOneUser,
  updateuser,
  deleteuser
};
