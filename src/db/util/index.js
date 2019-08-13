import sequelize from '../connection';

export const transaction = fn => sequelize.transaction(fn);
// prettier-ignore
export const createTable = (tableName, defineTable) => (
  (queryInterface, Sequelize) => (
    transaction(() => queryInterface.createTable(tableName, defineTable(Sequelize)))
  )
);
// prettier-ignore
export const dropTable = tableName => (
  queryInterface => (
    transaction(() => queryInterface.dropTable(tableName))
  )
);

export const createAndDropTable = (tableName, defineTable) => ({
  up: createTable(tableName, defineTable),
  down: dropTable(tableName),
});

export const insertAndDeleteTable = (tableName, data) => ({
  up: queryInterface => transaction(() => queryInterface.bulkInsert(tableName, data)),
  down: queryInterface => queryInterface.bulkDelete(tableName),
});

export const timestampsColumns = Sequelize => ({
  createdAt: { type: Sequelize.DATE },
  updatedAt: { type: Sequelize.DATE },
  deletedAt: { type: Sequelize.DATE },
});

export async function upsert(model, value) {
  if (!value.id) return model.create(value);
  const instance = await model.findByPk(value.id);
  return instance.update(value);
}

export function upsertMany(model, values) {
  return Promise.all(values.map(val => upsert(model, val)));
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function fullUpdate(model, id, body) {
  const instance = await model.findByPk(id);
  const allPromisses = Object.keys(model.associations).map(async (asscKey) => {
    if (body[asscKey]) {
      const result = await upsertMany(model.associations[asscKey].target, body[asscKey]);
      await instance[`set${capitalize(asscKey)}`](result);
      return 1;
    }
    return 0;
  });

  await Promise.all(allPromisses);

  return instance.update(body);
}

export async function validate(model, values) {
  try {
    await model.build(values).validate();
    return true;
  } catch (error) {
    throw new Error(error);
  }
}

export async function verifyPk(model, id) {
  try {
    const instance = await model.findByPk(id, { raw: true, atributes: ['id'] });
    if (instance === null) throw new Error('Id no found');
  } catch (error) {
    throw new Error(error);
  }
}
