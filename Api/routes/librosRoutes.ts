import { Router } from 'express';
import { LibrosController } from '../controllers/LibrosController';
import { verificarToken } from '../middleware/auth';

const router = Router();
const librosController = new LibrosController();

// Rutas públicas
router.get('/libros', librosController.getAllLibros);
router.get('/libros/:id', librosController.getLibroById);

// Rutas protegidas
router.post('/libros', verificarToken, librosController.createLibro);
router.put('/libros/:id', verificarToken, librosController.updateLibro);
router.delete('/libros/:id', verificarToken, librosController.deleteLibro);

export default router;