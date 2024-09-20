const { comments } = require("../../database/comments");

const updateComment = (request, response) => {
  const { id } = request.params;
  const { body } = request;

  const updatesComments = comments.map((update) => {
    if (update.id === Number(id)) {
      update.userId = body.update;
      update.title = body.title;
      update.body = body.body;
      return update;
    }
    return update;
  });

  if (updatesComments) {
    response.status(200).json({
      comments: comments,
      message: " post title soligdow",
    });
  } else {
    response.status(400).send(`you ${id} successfully updated`);
  }
};

module.exports = { updateComment };
