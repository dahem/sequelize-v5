import { insertAndDeleteTable } from '../util';

const tableName = 'task';
const data = [{ name: 'task 1', userId: 1 }];
export default insertAndDeleteTable(tableName, data);
