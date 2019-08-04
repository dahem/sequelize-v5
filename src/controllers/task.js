import models from 'db/models';

const { Task, User } = models;

export function getAll() {
  return Task.findAll({ include: [User] });
}
