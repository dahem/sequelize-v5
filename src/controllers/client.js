import models from 'db/models';

const { Client, Product } = models;

export function getAll() {
  return Client.findAll();
}
export function getById(id) {
  return Client.findByPk(id, { include: [Product] });
}

export async function create(body) {
  const client = await Client.create(body, { include: [Product] });
  return getById(client.id);
}

export async function update(id, body) {
  await Client.fullUpdate(id, body);
  return getById(id);
}
