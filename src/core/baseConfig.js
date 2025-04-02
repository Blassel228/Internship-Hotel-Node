require('dotenv').config({path:__dirname+'/./../../.env'})

class BaseConfig {
  constructor(schema) {
    this.schema = schema;
    const { error, value } = schema.validate(process.env, { allowUnknown: true });

    if (error) {
      throw new Error(`Configuration validation failed: ${error.message}`);
    }

    Object.assign(this, value);
  }
}

module.exports = BaseConfig;
