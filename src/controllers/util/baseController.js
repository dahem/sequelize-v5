function getById(model, id) {
  return model.findByPk(id, { include: [{ all: true }] });
}

async function create(model, body) {
  const instance = await model.create(body, { include: [{ all: true }] });
  return getById(model, instance.id);
}

async function update(model, id, body) {
  await model.fullUpdate(id, body);
  return getById(model, id);
}

export default model => ({
  getById: id => getById(model, id),
  getAll: () => model.findAll(),
  create: body => create(model, body),
  update: (id, body) => update(model, id, body),
});
