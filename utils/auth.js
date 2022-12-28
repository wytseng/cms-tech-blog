const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    // res.redirect('/login');
    console.log("logged in? " + req.session.loggedIn)
    res.status(400).json("need to log in first");
  } else {
    next();
  }
};

module.exports = withAuth;