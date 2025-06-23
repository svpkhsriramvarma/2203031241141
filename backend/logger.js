const axios = require('axios');

function logEvent(stack, level, pkg, message) {
  axios.post('http://20.244.56.144/evaluation-service/logs', {
    stack: stack,
    level: level,
    package: pkg,
    message: message
  }).then(res => {
    console.log('Log success:', res.status);
  }).catch(err => {
    console.error('Log error:', err.message);
  });
}

module.exports = logEvent;
