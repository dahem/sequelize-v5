import models from 'db/models';

const { Client, Product } = models;

export function getAll() {
  return Product.findAll();
}
export function getById(id) {
  return Product.findByPk(id, { include: [Client] });
}

export async function create(body) {
  const user = await Product.create(body, { include: [Client] });
  return getById(user.id);
}

export async function update(id, body) {
  await Product.fullUpdate(id, body);
  return getById(id);
}
