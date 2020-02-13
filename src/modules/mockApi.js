import { users } from '../_mock_/app/data';

export const GetUsers = async () => {
  return new Promise((resolve) => {
    setTimeout( function() {
      resolve(users.reduce((obj, user) => {
        obj[user.userId] = user;
        return obj;
      }, {}))
    },  1000)
  });
};

export const GetUser = async (userId) => {
  return new Promise((resolve) => {
    setTimeout( function() {
      resolve(users.filter(u => u.userId === userId))
    }, 250)
  });
};
