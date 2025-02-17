import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libros } from '../../models/libros';
import { LibrosService } from '../../service/libros/libros.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-back-edit-libro',
  imports: [ReactiveFormsModule],
  templateUrl: './back-edit-libro.component.html',
  styleUrl: './back-edit-libro.component.css'
})
export class BackEditLibroComponent implements OnInit{
  id:number = 0;
  libro!: Libros;
  formLibro!: FormGroup;
  imagenPreview: string | null = null;
  imagenFile: File | null = null;

  constructor(private route: ActivatedRoute, private librosService: LibrosService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.formLibro = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      autor: new FormControl('', [Validators.required]),
      aniopublicacion: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
      isbn: new FormControl('', [Validators.required]),
      imagen: new FormControl(null, [Validators.required])
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Validar el tipo de archivo
      if (!file.type.includes('libros/')) {
        alert('Por favor, selecciona una imagen válida');
        return;
      }
      
      // Validar el tamaño (2MB máximo)
      if (file.size > 2 * 1024 * 1024) {
        alert('La imagen no debe superar los 2MB');
        return;
      }

      this.imagenFile = file;
      this.formLibro.patchValue({
        imagen: file
      });

      // Crear preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenPreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  ngOnInit(): void {
    this.librosService.getLibroById(this.id).subscribe({
      next: (libro: Libros) => {
        this.libro = libro;
      },
      error: (error: any) => {
        console.error('Error al obtener el libro', error);
      }
    });
  }

  guardarLibro() {
    if(this.formLibro.valid && this.imagenFile) {
      const formData = new FormData();

      Object.keys(this.formLibro.value).forEach(key => {
        if (key !== 'imagen') {
          formData.append(key, this.formLibro.value[key]);
        }
      });
      formData.append('imagen', this.imagenFile);

      this.librosService.createLibro(formData).subscribe({
        next: (libro: Libros) => {
          console.log('Libro guardado correctamente', libro);
        },
        error: (error: any) => {
          console.error('Error al guardar el libro', error);
        }
      })
    }
  }
}
