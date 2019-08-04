import models from 'db/models';

const { User, Task, Address } = models;

export function getAll() {
  return User.findAll({ include: [Task, Address] });
}
