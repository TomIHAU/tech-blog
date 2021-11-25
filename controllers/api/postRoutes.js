const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

//need to edit still

router.get("/", (req, res) => {
  try {
    const getPosts = await Post.findAll({});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      text: req.body.text,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    res.json(deletePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
