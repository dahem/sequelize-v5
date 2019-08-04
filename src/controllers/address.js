import models from 'db/models';

const { Address, User } = models;

export function getAll() {
  return Address.findAll({ include: [User] });
}
