// POLYFILL
require('babel-polyfill');

async function publishLevel(userId, levelData) {
  const user = await getUser(userId);
  const canCreateRes = await canCreate(user);

  if (!canCreateRes) {
    return null;
  }

  const level = await saveLevel(user, levelData);

  return level;
}

function getUser(userId) {

  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({
        id: userId,
        nickname: 'tlhunter'
      });
    }, 100);
  });
}

function canCreate(user) {

  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(user.id === 12);
    }, 1000);
  });
}

function saveLevel(user, data) {

  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      /*
      resolve({
        id: 100,
        owner: user.nickname,
        data: data
      });
      */
      reject('HERE IS THE REJECT');
    }, 5000);
  });
}

console.log('Start request');

publishLevel(12, {data: true}).then(function(levelData) {
  console.log(levelData);
}).catch(function(e) {
  console.log(e);
});

console.log('finished');
