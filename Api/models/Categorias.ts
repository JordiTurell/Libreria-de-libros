import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Categorias extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  nombre!: string;
}