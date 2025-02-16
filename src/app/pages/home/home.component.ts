import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../service/libros/libros.service';
import { Libros } from '../../models/libros';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  libros: Libros[] = [];

  constructor(private librosService: LibrosService) {

  }

  ngOnInit(): void {
    this.librosService.getLibros().subscribe({
      next: (res) => {
        this.libros = res;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        
      }
    });
  }

}
