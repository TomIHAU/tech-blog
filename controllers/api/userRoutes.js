const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

////need to edit still

router.get("/", (req, res) => {
  try {
    const getComments = await User.findAll({});
    res.json(getUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newUser = await User.create({
      text: req.body.text,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, (req, res) => {
  try {
    const deleteUser = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deleteUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
