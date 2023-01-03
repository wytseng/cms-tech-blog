const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userPostsData = await Post.findAll({ where: { userId: req.session.userId }});

    const posts = userPostsData.map((post) => post.get({ plain: true }));

    res.render('dashboard', { 
      layout: 'dashboard',
      posts });
  } catch(err) {
    res.status(500).json(err);
  }
})

router.get('/new', withAuth, async(req, res) => {
  res.render('new-post', { layout: 'dashboard' });
})

module.exports = router;