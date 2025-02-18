//const dotEnv = require("dotenv");

// if (process.env.NODE_ENV !== "prod") {
//   const configFile = `./.env.${process.env.NODE_ENV}`;
//   dotEnv.config({ path: configFile });
// } else {
//   dotEnv.config();
// }

// require('dotenv').config();
// console.log("PORTttttttttt:", process.env.PORT);
// console.log("DB_URLlllllll:", process.env.MONGODB_URI);
// console.log("APP_SECRETtttttt:", process.env.APP_SECRET);
module.exports = {
  PORT: "8003",
  DB_URL: "mongodb+srv://1022prateeksharma:!1pRateek@shoppingcluster223.gd5ef.mongodb.net/collection?retryWrites=true&w=majority&appName=ShoppingCluster223",
  APP_SECRET: "elkmf",
  MSG_QUEUE_URL: 'amqp://myuser:mypassword@rabbitmq:5672',
  EXCHANGE_NAME: 'ONLINE_SHOPPING',
  SHOPPING_BINDING_KEY: 'SHOPPING_SERVICE',
  CUSTOMER_BINDING_KEY: 'CUSTOMER_SERVICE',
  QUEUE_NAME: 'SHOPPING_QUEUE'
};
