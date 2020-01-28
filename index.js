'use strict';

const https = require('https');

function isUsed(screenName) {
  const options = {
    host: 'twitter.com',
    path: `/intent/user?screen_name=${screenName}`,
  };

  return new Promise((resolve, reject) => {
    const onResponse = (res) => {
      resolve(res.statusCode === 200);
      res.resume();
    };

    https.get(options, onResponse).on('error', reject);
  });
}

module.exports = { isUsed };
