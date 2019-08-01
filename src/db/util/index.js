import sequelize from '../connection';

export const transaction = fn => sequelize.transaction(fn);
// prettier-ignore
export const createTable = (tableName, defineTable) => (
  (queryInterface, Sequelize) => (
    transaction(() => queryInterface.createTable('task', defineTable(Sequelize)))
  )
);
// prettier-ignore
export const dropTable = tableName => (
  queryInterface => (
    transaction(() => queryInterface.dropTable(tableName))
  )
);
