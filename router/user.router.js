const express = require("express");
const { getUsers } = require("../controller/user/getUsers.controller");

const userRouter = express.Router();

userRouter.get("/", getUsers);

module.exports = userRouter;
