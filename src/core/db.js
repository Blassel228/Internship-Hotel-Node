const Joi = require('joi');
const BaseConfig = require('./baseConfig');

const dbSchema = Joi.object({
  DB_HOST: Joi.string().default('localhost'),
  DB_PORT: Joi.number().default(5432),
  DB_NAME: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_PASS: Joi.string().required(),
  DB_DIALECT: Joi.string().required(),

  DB_URL:`postgresql://${this.DB_USER}:${this.DB_PASS}@
          ${this.DB_HOST}:${this.DB_PORT}/${this.DB_NAME}`
});

class Db extends BaseConfig {
  constructor() {
    super(dbSchema);
  }
}

module.exports = new Db();
