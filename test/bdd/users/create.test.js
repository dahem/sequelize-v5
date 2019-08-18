import { createAndCloseDB, request } from 'test/util';

describe('insert one user with valid email and name', () => {
  createAndCloseDB();

  test('create user', async () => {
    await request('post', '/users')
      .send({ name: 'userrr' })
      .expect(201);
  });
});
