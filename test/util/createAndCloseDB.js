import sequelize from 'db/connection';

export default () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });
  afterAll(async () => {
    sequelize.close();
  });
};
