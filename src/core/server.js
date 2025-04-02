const Joi = require('joi');
const BaseConfig = require('./baseConfig');

const serverSchema = Joi.object({
  HOST: Joi.string().required(),
  PORT: Joi.number().required()
});

class Server extends BaseConfig {
  constructor() {
    super(serverSchema);
  }
}

module.exports = new Server();
