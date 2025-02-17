import { Component } from '@angular/core';
import { Libros } from '../../models/libros';
import { LibrosService } from '../../service/libros/libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-libros',
  imports: [],
  templateUrl: './back-libros.component.html',
  styleUrl: './back-libros.component.css'
})
export class BackLibrosComponent {
  libros: Libros[] = [];

  constructor(private librosService: LibrosService, private router: Router) {
    this.actualizarListado();
  }

  actualizarListado() {
    this.librosService.backGetLibros().subscribe({
      next: (libros: Libros[]) => {
        this.libros = libros;
      },
      error: (error: any) => {
        console.error('Error al obtener los libros', error);
      },
      complete: () => {
        console.log('Libros obtenidos correctamente');
      }
    });
  }

  editLibro(id: number) {
    if(id === 0) {
      this.router.navigate([`/back/libros/new`]);
    } else {
      this.router.navigate([`/back/libros/${id}`]);
    }
  }

  deleteLibro(id: number) {
    this.librosService.deleteLibro(id).subscribe({
      next: () => {
        this.actualizarListado();
      },
      error: (error: any) => {
        console.error('Error al eliminar el libro', error);
      }
    });
  }
}
