import { Table, Column, Model, DataType } from 'sequelize-typescript';
import bcrypt from 'bcrypt';

@Table
export class Usuario extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  nombre!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  rol!: string;
} 