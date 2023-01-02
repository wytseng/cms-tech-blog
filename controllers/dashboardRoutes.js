const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/', async (req, res) => {
  if (req.session.loggedIn) {
    const userPostsData = await Post.findAll({ where: { userId: req.session.userId }});

    const userPosts = userPostsData.map((post) => post.get({ plain: true }));
    res.render('dashboard', { userPosts });
  } else {
    res.redirect('/login');
  }
})

module.exports = router;