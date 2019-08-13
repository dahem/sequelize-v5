import models from 'db/models';

const { User, Task, Address } = models;

export function getAll() {
  return User.findAll();
}
export function getById(id) {
  return User.findByPk(id, { include: [Task, Address] });
}

export async function create(body) {
  const user = await User.create(body, { include: [Task, Address] });
  return getById(user.id);
}

export async function update(id, body) {
  await User.fullUpdate(id, body);
  return getById(id);
}
