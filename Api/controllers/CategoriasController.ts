import { Request, Response } from 'express';
import { Categorias } from '../models/Categorias';

export class CategoriasController {
  // Obtener todas las categorías
  async getAllCategorias(req: Request, res: Response) {
    try {
      const categorias = await Categorias.findAll();
      return res.status(200).json(categorias);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener las categorías' });
    }
  }

  // Obtener una categoría por ID
  async getCategoriaById(req: Request, res: Response) {
    try {
      const categoria = await Categorias.findByPk(req.params.id);
      if (categoria) {
        return res.status(200).json(categoria);
      }
      return res.status(404).json({ error: 'Categoría no encontrada' });
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener la categoría' });
    }
  }

  // Crear una nueva categoría
  async createCategoria(req: Request, res: Response) {
    try {
      const { nombre } = req.body;
      const categoria = await Categorias.create({ nombre });
      return res.status(201).json(categoria);
    } catch (error) {
      return res.status(500).json({ error: 'Error al crear la categoría' });
    }
  }

  // Actualizar una categoría
  async updateCategoria(req: Request, res: Response) {
    try {
      const { nombre } = req.body;
      const categoria = await Categorias.findByPk(req.params.id);
      if (categoria) {
        await categoria.update({ nombre });
        return res.status(200).json(categoria);
      }
      return res.status(404).json({ error: 'Categoría no encontrada' });
    } catch (error) {
      return res.status(500).json({ error: 'Error al actualizar la categoría' });
    }
  }

  // Eliminar una categoría
  async deleteCategoria(req: Request, res: Response) {
    try {
      const categoria = await Categorias.findByPk(req.params.id);
      if (categoria) {
        await categoria.destroy();
      }
      return res.status(204).json({ message: 'Categoría eliminada correctamente' });
    } catch (error) {
      return res.status(500).json({ error: 'Error al eliminar la categoría' });
    }
  }
}



