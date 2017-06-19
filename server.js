/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const request = require('request');
const app = express();
const PORT = process.env.PORT || 3001;
const apiConst = require('./constants');

app.use('/', express.static(__dirname));
app.use('/@', (req, res) => {
  const url = `${apiConst.API_ROOT}${req.url}`;
  console.log(`[proxy request] ${url}`);
  req.pipe(request(url))
    .pipe(res);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://localhost:${PORT}`);
});
