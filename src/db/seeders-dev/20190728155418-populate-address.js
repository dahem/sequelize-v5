import { insertAndDeleteTable } from '../util';

const tableName = 'address';
const data = [{ name: 'address 1', userId: 1 }];
export default insertAndDeleteTable(tableName, data);
