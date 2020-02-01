const users = require('./users');

const findUsers = (key, value) => {
  if (!key || !value) return users;
  const result = users.filter(user => {
    if (typeof user[key] === 'string') {
      return user[key].toLowerCase() === value.toLowerCase();
    }

    return user[key] === value;
  });

  if (!result) return undefined;
  if (result.length > 1) return result;
  return result[0];
};

const addUser = user => {
  const userId = users[users.length - 1].id + 1;
  const userCreated = { id: userId, ...user };

  users.push(userCreated);
  return userCreated;
};

const removeUser = userId => {
  const userToRemove = findUsers('id', userId);
  users.splice(users.indexOf(userToRemove), 1);

  return userToRemove;
};

const findIndex = userId => {
  const userToSearch = findUsers('id', userId);

  return users.indexOf(userToSearch);
};

module.exports = { findUsers, addUser, removeUser, findIndex };
