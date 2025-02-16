import { Router } from 'express';
import { UsuarioController } from '../controllers/UsuarioController';

const router = Router();
const usuarioController = new UsuarioController();

router.post('/registro', usuarioController.registro);
router.post('/login', usuarioController.login);

export default router; 