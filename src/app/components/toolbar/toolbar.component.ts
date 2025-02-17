import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  constructor(private router: Router, private authService: AuthService) {

  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToLogin() {
    this.authService.removeToken();
    this.router.navigate(['/back/login']);
  }
}
