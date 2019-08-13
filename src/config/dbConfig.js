module.exports = {
  development: {
    username: 'root',
    password: 'duvetlain',
    database: 'auth_db',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      decimalNumbers: true,
    },
  },
  test: {
    username: 'root',
    password: 'duvetlain',
    database: 'auth_db_test',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      decimalNumbers: true,
    },
  },
  production: {},
};
