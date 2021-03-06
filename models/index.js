const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

Post.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Post, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

module.exports = { Comment, Post, User };
