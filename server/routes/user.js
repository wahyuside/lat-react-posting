const userRoute = require("express").Router();
const UserController = require("../controllers/UserController");

userRoute.get("/", UserController.getUsers);

module.exports = userRoute;
