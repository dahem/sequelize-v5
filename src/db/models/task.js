import Sequelize from 'sequelize';
import sequelize from '../connection';

class Task extends Sequelize.Model {}

Task.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'task',
    tableName: 'task',
    paranoid: true,
  },
);

export default Task;
