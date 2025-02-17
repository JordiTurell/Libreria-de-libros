import { Sequelize } from 'sequelize-typescript';
import { Libros } from './models/Libros';
import { Usuario } from './models/Usuario';
import { Categorias } from './models/Categorias';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
  models: [
    Libros,
    Usuario,
    Categorias
  ]
});

sequelize.sync(); 

export default sequelize;