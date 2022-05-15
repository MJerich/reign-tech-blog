const { Post } = require("../models");

const Postdata = [
  {
    title: "Javascript is great!",
    content: "I'm having so much fun learning javascript",
    user_id: 1,
  },
  {
    title: "this is a title for a tech blog post",
    content: "this is the content of a tech blog post",
    user_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(Postdata);

module.exports = seedPost;
