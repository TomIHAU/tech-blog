const router = require("express").Router();
const { Comment, Post, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User, Comment],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
    res.render("login", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
    res.render("signup", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/dashboard", async (req, res) => {
//   try {
//     res.render("dashboard", {
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
