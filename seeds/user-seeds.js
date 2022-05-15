const { User } = require("../models");

const userdata = [
  { username: "Matt", email: "Matt@gmail.com", password: "abc123" },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
