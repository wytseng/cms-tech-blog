const express = require('express');
const session = require('express-session');
// import connection object
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 600000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(require('./controllers'))


// connect to db before starting server
sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  });