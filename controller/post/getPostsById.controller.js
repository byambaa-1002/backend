// const { posts } = require("../../database/posts");

// const getPostsById = (request, response) => {
//   const { postId } = request.params;

//   const post = posts.find((post) => `${post.id}` === postId);

//   if (!post) {
//     response.json({
//       message: `${postId} post oldsongui`,
//     });
//   }

//   response.json({
//     post: post,
//     message: "success",
//   });
// };

// module.exports = { getPostsById };
