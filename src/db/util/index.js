import sequelize from '../connection';

export const transaction = fn => sequelize.transaction(fn);

export const createTable = (tableName, defineTable) => (
  (queryInterface, Sequelize) => (
    transaction(() => queryInterface.createTable('task', defineTable(Sequelize)))
  )
);

export const dropTable = tableName => (
  (queryInterface, Sequelize) =>
    transaction(() => queryInterface.dropTable(tableName))
);
