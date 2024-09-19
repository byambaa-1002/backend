const users = [
  { id: 1, firstName: "john", lastname: "doe" },
  { id: 2, firstName: "james", lastname: "Bond" },
  { id: 3, firstName: "huffd", lastname: "dfdslfdd" },
];

exports.getUsers = (request, response) => {
  console.log("hi");
  response.status(200).json({
    users: users,
  });
};
