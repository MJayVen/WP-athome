const express = require('express')
const app = express()

const userController = require('./controllers/users');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

app
  .get('/', (req, res) => {
    res.statusCode(200).send('Hello, can you hear me?')
  })
  .use('/api/v1/users', userController);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
