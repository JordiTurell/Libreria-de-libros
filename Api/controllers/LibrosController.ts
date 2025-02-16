import { Request, Response } from 'express';
import { Libros } from '../models/Libros';

export class LibrosController {
  // Obtener todos los libros
  async getAllLibros(req: Request, res: Response) {
    try {
      const libros = await Libros.findAll();
      return res.status(200).json(libros);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener los libros' });
    }
  }

  // Obtener un libro por ID
  async getLibroById(req: Request, res: Response) {
    try {
      const libro = await Libros.findByPk(req.params.id);
      if (libro) {
        return res.status(200).json(libro);
      }
      return res.status(404).json({ error: 'Libro no encontrado' });
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener el libro' });
    }
  }

  // Crear un nuevo libro
  async createLibro(req: Request, res: Response) {
    try {
      const libro = await Libros.create(req.body);
      return res.status(201).json(libro);
    } catch (error) {
      return res.status(500).json({ error: 'Error al crear el libro' });
    }
  }

  // Actualizar un libro
  async updateLibro(req: Request, res: Response) {
    try {
      const libro = await Libros.findByPk(req.params.id);
      if (libro) {
        await libro.update(req.body);
        return res.status(200).json(libro);
      }
      return res.status(404).json({ error: 'Libro no encontrado' });
    } catch (error) {
      return res.status(500).json({ error: 'Error al actualizar el libro' });
    }
  }

  // Eliminar un libro
  async deleteLibro(req: Request, res: Response) {
    try {
      const libro = await Libros.findByPk(req.params.id);
      if (libro) {
        await libro.destroy();
        return res.status(200).json({ message: 'Libro eliminado correctamente' });
      }
      return res.status(404).json({ error: 'Libro no encontrado' });
    } catch (error) {
      return res.status(500).json({ error: 'Error al eliminar el libro' });
    }
  }
}