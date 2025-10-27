const os = require('os');

module.exports = function getContainerId() {
  return os.hostname();
};
