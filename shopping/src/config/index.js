//require('dotenv').config();

// if (process.env.NODE_ENV !== "prod") {
//   const configFile = `./.env.${process.env.NODE_ENV}`;
//   dotEnv.config({ path: configFile });
// } else {
//   dotEnv.config();
// }



module.exports = {
  PORT: process.env.PORT,
  DB_URL: "mongodb+srv://1022prateeksharma:!1pRateek@shoppingcluster223.gd5ef.mongodb.net/collection?retryWrites=true&w=majority&appName=ShoppingCluster223",
  APP_SECRET: process.env.APP_SECRET,
  MSG_QUEUE_URL: process.env.RABBITMQ_URL,
  EXCHANGE_NAME: 'ONLINE_SHOPPING',
  SHOPPING_BINDING_KEY: 'SHOPPING_SERVICE',
  CUSTOMER_BINDING_KEY: 'CUSTOMER_SERVICE',
  QUEUE_NAME: 'SHOPPING_QUEUE'
};
