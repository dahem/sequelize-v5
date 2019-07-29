import { transaction } from '../util';

export default {
  up: queryInterface =>
    transaction(() => {
      const tasks = [{ name: 'task 1' }];
      return queryInterface.bulkInsert('task', tasks);
    }),
  down: queryInterface => queryInterface.bulkDelete('task')
};
