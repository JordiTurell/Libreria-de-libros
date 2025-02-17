import { Router } from 'express';
import { CategoriasController } from '../controllers/CategoriasController';
import { verificarToken } from '../middleware/auth';

const router = Router();
const categoriasController = new CategoriasController();

// Rutas públicas
router.get('/categorias', categoriasController.getAllCategorias);
router.get('/categorias/:id', categoriasController.getCategoriaById);

// Rutas protegidas
router.post('/categorias', verificarToken, categoriasController.createCategoria);
router.put('/categorias/:id', verificarToken, categoriasController.updateCategoria);
router.delete('/categorias/:id', verificarToken, categoriasController.deleteCategoria);

export default router;
