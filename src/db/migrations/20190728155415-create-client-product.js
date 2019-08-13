import { createAndDropTable, timestampsColumns } from '../util';

const tableName = 'ClientProduct';

const defineTable = Sequelize => ({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  clientId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Client',
      key: 'id',
    },
  },
  productId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Product',
      key: 'id',
    },
  },
  ...timestampsColumns(Sequelize),
});

export default createAndDropTable(tableName, defineTable);
