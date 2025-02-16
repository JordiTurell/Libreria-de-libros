import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Libros extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  titulo!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  autor!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  anioPublicacion!: number;

  @Column({
    type: DataType.STRING
  })
  genero!: string;

  @Column({
    type: DataType.TEXT
  })
  descripcion!: string;

  @Column({
    type: DataType.STRING
  })
  ISBN!: string;
}