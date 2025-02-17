import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../models/usuarios';
import { UsuariosService } from '../../service/usuarios/usuarios.service';

@Component({
  selector: 'app-back-users',
  imports: [],
  templateUrl: './back-users.component.html',
  styleUrl: './back-users.component.css'
})
export class BackUsersComponent implements OnInit {
  usuarios: Usuarios[] = [];

  constructor(private usuarioService: UsuariosService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((usuarios: Usuarios[]) => {
      this.usuarios = usuarios;
    });
  }
}
