import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'tu_clave_secreta';

export class UsuarioController {
  // Registro de usuario
  async registro(req: Request, res: Response) {
    try {
      const { email, password, nombre, rol } = req.body;

      // Verificar si el usuario ya existe
      const usuarioExistente = await Usuario.findOne({ where: { email } });
      if (usuarioExistente) {
        return res.status(400).json({ error: 'El email ya está registrado' });
      }

      // Encriptar contraseña
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Crear usuario
      const usuario = await Usuario.create({
        email,
        password: hashedPassword,
        nombre,
        rol
      });

      // Generar JWT
      const token = jwt.sign(
        { id: usuario.id, email: usuario.email, rol: usuario.rol },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      return res.status(201).json({
        mensaje: 'Usuario creado exitosamente',
        token,
        usuario: {
          id: usuario.id,
          email: usuario.email,
          nombre: usuario.nombre,
          rol: usuario.rol
        }
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Error al crear el usuario' });
    }
  }

  // Login de usuario
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      // Buscar usuario
      const usuario = await Usuario.findOne({ where: { email } });
      if (!usuario) {
        return res.status(400).json({ error: 'Usuario no encontrado' });
      }

      // Verificar contraseña
      const passwordValida = await bcrypt.compare(password, usuario.password);
      if (!passwordValida) {
        return res.status(400).json({ error: 'Contraseña incorrecta' });
      }

      // Generar JWT
      const token = jwt.sign(
        { id: usuario.id, email: usuario.email, rol: usuario.rol },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      return res.status(200).json({
        status: true,
        item:{
          token
        }
      });
    } catch (error) {
      return res.status(500).json({ error: 'Error en el login' });
    }
  }
} 