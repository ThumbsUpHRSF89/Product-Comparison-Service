const express = require('express');
const app = express();

app.get('/compareproducts', (req, res) => {
  res.send('Hello, world!');
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});