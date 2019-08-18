import request from 'supertest';
import app from 'app';

function getToken() {
  return '5y43594835493543hhretrei';
}

function wrapperAuth(requestApp) {
  return requestApp.set('access-token', getToken());
}

export default (method, path) => wrapperAuth(request(app)[method](path));
