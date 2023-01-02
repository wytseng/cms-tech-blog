const router = require('express').Router();
const { Post, User, Comment } = require('../models')

router.get('/', async (req, res) => {
  try {
    const postsData = await Post.findAll({ include: User });

    const posts = postsData.map((post) => post.get({ plain: true }));
    if (req.session.loggedIn) {
      res.render('all-posts', { 
        layout: 'loggedInMain',
        posts });
    } else {
      res.render('all-posts', { posts });
    }
  } catch(err) {
    res.status(500).json(err);
  }
})

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, { include:  User });
    const commentData = await Comment.findAll({ where: { postId: req.params.id }, include: User });

    // res.json(commentData);

    const post = postData.get({ plain: true });
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    if (req.session.loggedIn) {
      res.render('post', { 
        layout: 'loggedInMain',
        post, comments });
    } else {
      res.render('post', { post, comments });
    }
  } catch(err) {
    res.status(500).json(err);
  }
})

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
})

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
})


module.exports = router;