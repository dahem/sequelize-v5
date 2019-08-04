import fs from 'fs';
import path from 'path';
import sequelize from 'db/connection';

const basename = path.basename(module.filename);
const models = {};

fs.readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  });

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) models[modelName].associate(models);
});

models.sequelize = sequelize;

export default models;
