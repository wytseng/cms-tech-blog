const comments = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

comments.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({ ...req.body, userId: req.session.userId});
    res.status(200).json(newComment);
  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = comments