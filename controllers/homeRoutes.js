const router = require('express').Router();
const { Post, User } = require('../models')

router.get('/', async (req, res) => {
  try {
    const postsData = await Post.findAll({ include: User });

    const posts = postsData.map((post) => post.get({ plain: true }));
    res.render('all-posts', { posts });
  } catch(err) {
    res.status(500).json(err);
  }
})

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, { include: User });

    const post = postData.get({ plain: true });
    res.render('post', post);
  } catch(err) {
    res.status(500).json(err);
  }
})

module.exports = router;