import { createTable, dropTable } from '../util';

const defineTable = Sequelize => ({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: { type: Sequelize.DATE },
  updatedAt: { type: Sequelize.DATE },
  deletedAt: { type: Sequelize.DATE }
});

export default {
  up: createTable('task', defineTable),
  down: dropTable('task')
};
