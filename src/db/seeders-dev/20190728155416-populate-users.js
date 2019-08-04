import { insertAndDeleteTable } from '../util';

const tableName = 'user';
const data = [{ name: 'user 1' }];
export default insertAndDeleteTable(tableName, data);
