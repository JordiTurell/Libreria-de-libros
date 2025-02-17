import { Router } from 'express';
import { UsuarioController } from '../controllers/UsuarioController';
import { verificarToken } from '../middleware/auth';

const router = Router();
const usuarioController = new UsuarioController();

router.post('/registro', usuarioController.registro);
router.post('/login', usuarioController.login);
router.get('/usuarios', verificarToken, usuarioController.getUsuarios);

export default router; 