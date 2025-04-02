const server = require('./server');
const db = require('./db');

const config = {
  server: server,
  db: db,
};

module.exports = config;
