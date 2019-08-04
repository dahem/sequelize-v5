import { createAndDropTable, timestampsColumns } from '../util';

const tableName = 'task';
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
      model: 'user',
      key: 'id',
    },
  },
  ...timestampsColumns(Sequelize),
});

export default createAndDropTable(tableName, defineTable);
