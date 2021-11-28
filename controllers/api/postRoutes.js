const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.put("/:id", withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const updatedPost = Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updatedPost) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
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

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deletePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
