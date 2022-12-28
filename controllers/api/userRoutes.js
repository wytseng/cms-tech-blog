const users = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

users.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    req.session.save(() => {
      req.session.loggedIn = true;
    });

    res.status(200).json(newUser);
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

users.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ 
      where: { 
        username: req.body.username 
      }
    });

    if (!userData) {
      res.status(400).json("Username does not exist. Please try again.");
      return;
    }

    const validPass = await bcrypt.compare(req.body.password, userData.password);

    if (!validPass) { 
      res.status(400).json("Incorrect usename or password. Please try again.");
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
    });

    res.status(200).json({ user: userData, message: "You are now logged in." });
  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
});

users.post('/logout', async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
})

module.exports = users;