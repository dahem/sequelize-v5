import fs from 'fs';
import path from 'path';
import sequelize from 'db/connection';
import { fullUpdate, validate, verifyPk } from 'db/util';

const basename = path.basename(module.filename);
const models = {};

fs.readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    // extend models
    model.fullUpdate = (id, values) => fullUpdate(model, id, values);
    model.validate = values => validate(model, values);
    model.verifyPk = id => verifyPk(model, id);
    models[model.name] = model;
  });

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) models[modelName].associate(models);
});

export default models;
