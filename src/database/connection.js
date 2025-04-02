const { Sequelize } = require('sequelize');
const config = require('../core/config');

const sequelize = new Sequelize(
  config.db.DB_NAME,
  config.db.DB_USER,
  config.db.DB_PASS,
  {
    host: config.db.DB_HOST,
    dialect: config.db.DB_DIALECT,
    logging: false,
    pool: {
        max: 10,
        min: 1,
        acquire: 30000,
        idle: 10000,
    },
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to the database successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;
