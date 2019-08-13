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
        validate: { len: { args: [5, 10], msg: 'name mast be len [2, 10]' } },
      },
      email: {
        type: Sequelize.STRING,
        validate: { isEmail: { msg: 'Invalid email' } },
      },
    },
    {
      tableName: 'User',
      sequelize,
      imestamps: true,
      paranoid: true,
      name: {
        singular: 'user',
        plural: 'users',
      },
    },
  );
  return User;
};
