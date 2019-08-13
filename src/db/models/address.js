import Sequelize, { Model } from 'sequelize';

export default (sequelize) => {
  class Address extends Model {
    static associate() {
      this.belongsTo(sequelize.models.User, { foreignKey: 'userId' });
    }
  }
  Address.init(
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'Address',
      timestamps: true,
      paranoid: true,
      name: { singular: 'address', plural: 'addresses' },
    },
  );
  return Address;
};
