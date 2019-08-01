import Task from 'db/models/task';

export function getAll() {
  return Task.findAll();
}
