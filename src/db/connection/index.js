import Sequelize from 'sequelize';
import dbConfig from '../../config/dbConfig'; // not absolute path

export default new Sequelize(dbConfig.development);
