import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriasService } from '../../../service/categorias/categorias.service';
import { CommonModule } from '@angular/common';
import { Categorias } from '../../../models/categorias';

@Component({
  selector: 'app-modal-add-categoria',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal-add-categoria.component.html',
  styleUrl: './modal-add-categoria.component.css',
})
export class ModalAddCategoriaComponent {
  isOpen:boolean = false;
  @Output() actualizarListado = new EventEmitter<void>();

  categoria!: Categorias;
  form: FormGroup;
  isEdit = false;

  constructor(private fb: FormBuilder, private categoriaService: CategoriasService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  openModal() {
    this.isOpen = true;
    this.isEdit = false;
    this.form.reset();
  }

  closeModal() {
    this.isOpen = false;
    this.isEdit = false;
    this.form.reset();
  }

  editCategoria(id: number) {
    this.isOpen = true;
    this.categoriaService.getCategoriaById(id).subscribe({
      next: (categoria: Categorias) => {
        this.categoria = categoria;
        this.form.patchValue({
          nombre: this.categoria.nombre
        });
        this.isOpen = true;
        this.isEdit = true;
      },
      error: (error: any) => {
        console.error('Error al obtener la categoría', error);
      },
      complete: () => {
        this.isOpen = true;
        this.isEdit = true;
      }
    });
  }

  deleteCategoria(id: number) {
    this.categoriaService.deleteCategoria(id).subscribe({
      next: () => {
        this.isOpen = false;
        this.actualizarListado.emit();
      },
      error: (error: any) => {
        console.error('Error al eliminar la categoría', error);
      },
      complete: () => {
        this.isOpen = false;
      }
    });
  }
  onSubmit() {
    if (this.form.valid) {
      if (this.isEdit) {
        this.categoriaService.updateCategoria(this.categoria.id, this.form.value).subscribe({
          next: () => {
            this.isOpen = false;
            this.isEdit = false;
            this.actualizarListado.emit();
          },
          error: (error) => {
          },
          complete: () => {
            this.isOpen = false;
            this.isEdit = false;
          }
        });
      } else {
        this.categoriaService.createCategoria(this.form.value).subscribe({
          next: () => {
            this.isOpen = false;
            this.actualizarListado.emit();
          },
          error: (error) => {
            console.error('Error al agregar la categoría', error);
          },
        complete: () => {
          this.isOpen = false;
          }
        });
      }
    }
  }
}
