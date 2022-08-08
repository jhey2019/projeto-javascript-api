const Sequelize = require('sequelize');
const databaseConfig = require('../config/DB');
const Pessoa = require('../models/pessoaTb');

const models = [Pessoa];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig.get());
    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate &&
model.associate(this.connection.models));
  }

  close() {
    return this.connection.close();
  }
}

module.exports = Database;
