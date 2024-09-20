const express = require("express");
const userRouter = require("./router/user.router");
const postRouter = require("./router/post.router");
const commentRouter = require("./router/comment.router");

const app = express();

app.use(express.json());

const port = 8080;

app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}`);
});
