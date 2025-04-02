require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./core/swagger');
const config = require("./core/config")

const app = express();

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

app.listen(config.server.PORT, () => {
  console.log(`Server running at http://${config.server.HOST}:${config.server.PORT}`);
});