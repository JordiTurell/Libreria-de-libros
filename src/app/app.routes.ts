import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FrontComponent } from './layout/front/front.component';
import { BackComponent } from './layout/back/back.component';
import { BackHomeComponent } from './back/back-home/back-home.component';
import { AuthGuard } from './guard/guard.guard';
import { BackUsersComponent } from './back/back-users/back-users.component';
import { BackCategoriasComponent } from './back/back-categorias/back-categorias.component';
import { BackLibrosComponent } from './back/back-libros/back-libros.component';
import { BackEditLibroComponent } from './back/back-edit-libro/back-edit-libro.component';

export const routes: Routes = [
  // Ruta para el layout de back
  { path: 'back/login', component: LoginComponent },
  {
    path: 'back',
    component: BackComponent,
    children: [
      { path: 'home', component: BackHomeComponent, canActivate: [AuthGuard] },
      { path: 'users', component: BackUsersComponent, canActivate: [AuthGuard] },
      { path: 'categorias', component: BackCategoriasComponent, canActivate: [AuthGuard] },
      { path: 'libros', component: BackLibrosComponent, canActivate: [AuthGuard] },
      { path: 'libros/:id', component: BackEditLibroComponent, canActivate: [AuthGuard] },
      { path: 'libros/new', component: BackEditLibroComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  
  // Ruta para el layout de front
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  
  // Redirigir cualquier otra ruta a home
  { path: '**', redirectTo: 'home' }
];
