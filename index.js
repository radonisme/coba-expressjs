const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h3>Hello World!</h3>');
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/kontak', (req, res) => {
  res.sendFile('./kontak.html', { root: __dirname });
});

app.get('/users', (req, res) => {
  res.send('Get User');
});

app.post('/users', (req, res) => {
  res.send('Post User');
});

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params);
});

app.listen(port, () => {
  console.log(`Server berjalan di Port ${port}`);
});
