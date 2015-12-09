// POLYFILL
require('babel-polyfill');

export default async (userId, levelData) => {

  const user = await getUser(userId);
  const canCreateRes = await canCreate(user);

  if (!canCreateRes) {
    return null;
  }

  const level = await saveLevel(user, levelData);

  return level;
};

function getUser(userId) {

  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({
        id: userId,
        nickname: 'tlhunter'
      });
    }, 100);
  });
};

const canCreate = function(user) {

  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(user.id === 12);
    }, 100);
  });
};

const saveLevel = function(user, data) {

  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({
        id: 100,
        owner: user.nickname,
        data: data
      });

    }, 100);
  });
};
