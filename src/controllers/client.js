import models from 'db/models';

const { Client, Product } = models;

export function getAll() {
  return Client.findAll();
}
export function getById(id) {
  return Client.findByPk(id, { include: [Product] });
}

export async function create(body) {
  const user = await Client.create(body, { include: [Product] });
  return getById(user.id);
}

export async function update(id, body) {
  // await User.fullUpdate(id, body);
  // return getById(id);
}
