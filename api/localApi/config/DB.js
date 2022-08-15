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
