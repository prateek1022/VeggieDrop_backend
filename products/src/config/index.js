// const dotEnv = require("dotenv");

// // if (process.env.NODE_ENV !== "prod") {
// //   const configFile = `./.env.${process.env.NODE_ENV}`;
// //   dotEnv.config({ path: configFile });
// // } else {
// //   dotEnv.config();
// // }

// require('dotenv').config();

module.exports = {
  PORT: 8002,
  DB_URL: 'mongodb+srv://1022prateeksharma:!1pRateek@shoppingcluster223.gd5ef.mongodb.net/collection?retryWrites=true&w=majority&appName=ShoppingCluster223',
  APP_SECRET: 'elkmf',
  MSG_QUEUE_URL: 'amqp://myuser:mypassword@rabbitmq:5672',
  EXCHANGE_NAME: 'ONLINE_SHOPPING',
  SHOPPING_BINDING_KEY: 'SHOPPING_SERVICE',
  CUSTOMER_BINDING_KEY: 'CUSTOMER_SERVICE',
};


