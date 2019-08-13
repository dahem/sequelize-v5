import { createAndDropTable, timestampsColumns } from '../util';

const tableName = 'Task';
const defineTable = Sequelize => ({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'User',
      key: 'id',
    },
  },
  ...timestampsColumns(Sequelize),
});

export default createAndDropTable(tableName, defineTable);
