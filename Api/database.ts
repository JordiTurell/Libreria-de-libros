import { Sequelize } from 'sequelize-typescript';
import { Libros } from './models/Libros';
import { Usuario } from './models/Usuario';
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
  models: [Libros, Usuario]
});

sequelize.sync(); 

export default sequelize;