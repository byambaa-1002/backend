const express = require("express");
const { getPosts } = require("../controller/post/getPosts.controller");
const { getPostsById } = require("../controller/post/getPostsById.controller");

const postRouter = express.Router();

postRouter.get("/", getPosts);

postRouter.get("/:postId", getPostsById);

module.exports = postRouter;
