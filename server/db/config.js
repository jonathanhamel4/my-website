const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
    "development": {
      "operatorsAliases": Op,
      "dialect": "sqlite",
      "storage": "./database.sqlite3-dev"
    },
    "test": {
      "operatorsAliases": Op,
      "dialect": "sqlite",
      "storage": ":memory"
    },
    "production": {
      "operatorsAliases": Op,
      "dialect": "sqlite",
      "storage": "./database.sqlite3-prod"
    }
  }