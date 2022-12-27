const express = require('express');
// import connection object
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(require('./controllers'))

// app.listen(PORT, () => {
//   console.log(`App listeningon port ${PORT}!`);
// })

// connect to db before starting server
sequelize
  .sync()
  .then(() => {
    console.log(`App listeningon port ${PORT}!`);
  });