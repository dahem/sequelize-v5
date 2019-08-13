import Sequelize, { Model } from 'sequelize';

export default (sequelize) => {
  class Product extends Model {
    static associate() {
      this.belongsToMany(sequelize.models.Client, {
        through: 'ClientProduct',
        foreignKey: 'productId',
      });
    }
  }
  Product.init(
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'Product',
      imestamps: true,
      paranoid: true,
      name: {
        singular: 'product',
        plural: 'products',
      },
    },
  );
  return Product;
};
