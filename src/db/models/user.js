import Sequelize, { Model } from 'sequelize';

export default (sequelize) => {
  class User extends Model {
    static associate() {
      this.hasMany(sequelize.models.Task, { foreignKey: 'userId' });
      this.hasMany(sequelize.models.Address, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      imestamps: true,
      tableName: 'user',
      paranoid: true,
      name: {
        singular: 'user',
        plural: 'users',
      },
      comment: 'users',
    },
  );
  return User;
};
