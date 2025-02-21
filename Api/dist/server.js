"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const Libros_1 = require("./models/Libros");
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.get('/libros', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield Libros_1.Libros.findAll();
    res.json(users);
}));
app.get('/libros/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Libros_1.Libros.findByPk(req.params.id);
    res.json(user);
}));
app.post('/libros', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Libros_1.Libros.create(req.body);
    res.json(user);
}));
