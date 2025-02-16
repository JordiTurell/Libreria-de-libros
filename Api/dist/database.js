"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Libros_1 = require("./models/Libros");
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    models: [
        Libros_1.Libros
    ]
});
sequelize.sync();
exports.default = sequelize;
