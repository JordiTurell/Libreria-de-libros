import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';

@Component({
  selector: 'app-back-toolbar',
  imports: [],
  templateUrl: './back-toolbar.component.html',
  styleUrl: './back-toolbar.component.css'
})
export class BackToolbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  isProfileOpen = false;

  constructor(private authService: AuthService, private router: Router) {

  }

  closeSession(){
    this.authService.removeToken();
    this.router.navigate(['/back/login']);
  }
}
