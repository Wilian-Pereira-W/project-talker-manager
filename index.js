const express = require('express');
const bodyParser = require('body-parser');
const talkers = require('./ getTalkerList');
const talker = require('./getTalkerId');
const login = require('./login');
const { validatePassword, validateEmail } = require('./middlewares');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', talkers);

app.get('/talker/:id', talker);

app.post('/login', validateEmail, validatePassword, login);

app.listen(PORT, () => {
  console.log('Online');
});
