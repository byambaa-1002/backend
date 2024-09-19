const Users = [
  { id: 1, firstName: "john", lastname: "doe" },
  { id: 2, firstName: "james", lastname: "Bond" },
];

exports.getUser = (request, response) => {
  const { id } = request.params;
  const user = user.find((user) => user.id === Number(id));
  if (user) {
    response.status(200).json({
      user,
    });
  } else {
    response.status(400).send(`User ${id} not exist`);
  }
};
