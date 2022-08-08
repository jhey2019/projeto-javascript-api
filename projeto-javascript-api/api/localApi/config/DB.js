const Sequelize = require('sequelize');
// const { Log } = require('brcap-utils');

/* para rodar em debug alterar a linha
  logging: Log.sequelize e descomentar a linha
  const { Log } = require('brcap-utils');
*/

const get = () => {
  const dbName = 'local_db';
  const dbUser = 'root';
  const dbPassword = "";
  const dbHost = '127.0.0.1';
  const dbPort = 3306;
  const dbDialect = 'mysql';

  console.log("dbName", dbName);
  console.log("dbUser", dbUser);
  console.log("dbPassword", dbPassword);
  console.log("dbHost", dbHost);
  console.log("dbPort", dbPort);
  console.log("dbDialect", dbDialect);

  return {
    dialect: dbDialect,
    host: dbHost,
    username: dbUser,
    password: dbPassword,
    database: dbName,
    port: dbPort,
    logging: false,
    define: {
      underscored: true,
      underscoredAll: true,
      freezeTableName: true,
      timestamps: true,
    },
  };
};

module.exports = {
  get,
  Op: Sequelize.Op,
  Sequelize,
};
