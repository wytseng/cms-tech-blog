const comments = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

comments.post('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({ ...req.body, userId: req.session.userId});
    res.status(200).json(commentData);
  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = comments