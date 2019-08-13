import Sequelize, { Model } from 'sequelize';

export default (sequelize) => {
  class Client extends Model {
    static associate() {
      this.belongsToMany(sequelize.models.Product, {
        through: 'ClientProduct',
        foreignKey: 'clientId',
      });
    }
  }
  Client.init(
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'Client',
      imestamps: true,
      paranoid: true,
      name: {
        singular: 'client',
        plural: 'clients',
      },
      comment: 'clients',
    },
  );
  return Client;
};
