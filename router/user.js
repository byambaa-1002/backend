const express = require("express");

const { getUsers } = require("../controller/getUsers");
const { getUser } = require("../controller/getUser");

const userRouter = express.Router();

userRouter.get("/", getUsers).get("/:id", getUser);

module.exports = userRouter;
