
const posts = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

posts.post('/', withAuth, async(req, res) => {
  try {
    const newPost = await Post.create({ ...req.body, userId: req.session.userId });
    res.status(200).json(newPost);
  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
});

posts.put('/:id', async (req, res) => {
  try {
    const [rowsAffected] = await Post.update(req.body, { where: { id: req.params.id }});

    // checks if there is actually information updated.
    if ( rowsAffected > 0 ) { 
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch(err) {
    res.status(400).json(err);
  }
});

posts.delete('/:id', async (req, res) => {
  try {
    const rowsAffected = await Post.destroy({ where: { id: req.params.id }});

    if ( rowsAffected > 0 ) { 
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch(err) { 
    res.status(400).json(err);
  }
})

module.exports = posts;