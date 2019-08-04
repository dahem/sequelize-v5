import sequelize from '../connection';

export const transaction = fn => sequelize.transaction(fn);
// prettier-ignore
export const createTable = (tableName, defineTable) => (
  (queryInterface, Sequelize) => (
    transaction(() => queryInterface.createTable(tableName, defineTable(Sequelize)))
  )
);
// prettier-ignore
export const dropTable = tableName => (
  queryInterface => (
    transaction(() => queryInterface.dropTable(tableName))
  )
);

export const createAndDropTable = (tableName, defineTable) => ({
  up: createTable(tableName, defineTable),
  down: dropTable(tableName),
});

export const insertAndDeleteTable = (tableName, data) => ({
  up: queryInterface => transaction(() => queryInterface.bulkInsert(tableName, data)),
  down: queryInterface => queryInterface.bulkDelete(tableName),
});

export const timestampsColumns = Sequelize => ({
  createdAt: { type: Sequelize.DATE },
  updatedAt: { type: Sequelize.DATE },
  deletedAt: { type: Sequelize.DATE },
});
