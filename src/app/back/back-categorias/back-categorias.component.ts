import { Component, OnInit, ViewChild } from '@angular/core';
import { Categorias } from '../../models/categorias';
import { CategoriasService } from '../../service/categorias/categorias.service';
import { ModalAddCategoriaComponent } from '../../components/modals/modal-add-categoria/modal-add-categoria.component';

@Component({
  selector: 'app-back-categorias',
  imports: [ModalAddCategoriaComponent],
  templateUrl: './back-categorias.component.html',
  styleUrl: './back-categorias.component.css'
})
export class BackCategoriasComponent implements OnInit{
  @ViewChild(ModalAddCategoriaComponent) modalAddCategoria!: ModalAddCategoriaComponent;

  categorias: Categorias[] = [];
  
  categoria!: Categorias;

  constructor(private categoriaService: CategoriasService) {}

  ngOnInit(): void {
    this.actualizarListado();
  }

  actualizarListado() {
    this.categoriaService.getCategorias().subscribe((categorias: Categorias[]) => {
      this.categorias = categorias;
    });
  }

  editCategoria(id: number) {
    this.modalAddCategoria.editCategoria(id);
  }

  deleteCategoria(id: number) {
    this.modalAddCategoria.deleteCategoria(id);
  }

  openModal(){
    this.modalAddCategoria.openModal();
  }
}
