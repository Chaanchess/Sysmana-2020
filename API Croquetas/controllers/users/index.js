const express = require('express');
const router = express.Router();

const {
  findUsers,
  addUser,
  removeUser,
  findIndex
} = require('../../fakeDB/finder');

const users = require('../../fakeDB/users.json');

// GET todos los usuarios
// http://localhost:9000/users
router.get('/', (req, res, next) => {
  const users = findUsers();

  res.send(users);
});

// GET todos los usuarios del género introducido
// http://localhost:9000/users/gender/male
router.get('/gender/:g', (req, res, next) => {
  const users = findUsers('gender', req.params.g);

  res.send(users);
});

// GET el usuario con una ip en concreto
// http://localhost:9000/users/ip/126.196.187.96
router.get('/ip/:ip', (req, res, next) => {
  const users = findUsers('ip_address', req.params.ip);

  res.send(users);
});

// GET los usuarios con el nombre introducido
// http://localhost:9000/users/name/Rustin
router.get('/name/:name', (req, res, next) => {
  const users = findUsers('first_name', req.params.name);

  res.send(users);
});

// GET los usuarios que cumplan la query string
// http://localhost:9000/users/find/email/krafflesm4@flickr.com
router.get('/find/:key/:value', (req, res, next) => {
  const users = findUsers(req.params.key, req.params.value);

  res.send(users);
});

// POST crea un nuevo usuario
// http://localhost:9000/users
router.post('/', (req, res, next) => {
  const user = req.body;

  const userCreated = addUser(user);
  res.send(userCreated);
});

// PUT edita un usuario
// http://localhost:9000/users
router.put('/:id', (req, res, next) => {
  const user = req.body;

  const indexUser = findIndex(parseInt(req.params.id));

  users[indexUser] = { ...users[indexUser], ...user };

  res.send(users[indexUser]);
});

// DELETE elimina un usuario
// http://localhost:9000/users
router.delete('/:id', (req, res, next) => {
  const userDeleted = removeUser(parseInt(req.params.id));

  res.send(`Name user deleted: ${userDeleted.first_name}`);
});

module.exports = router;
