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
      timestamps: true,
      tableName: 'address',
      paranoid: true,
      name: {
        singular: 'address',
        plural: 'addresses',
      },
      comment: 'addresses',
    },
  );
  return Address;
};
