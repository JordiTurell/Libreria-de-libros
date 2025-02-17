import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackToolbarComponent } from '../../components/back/back-toolbar/back-toolbar.component';
import { BackAsiderComponent } from '../../components/back/back-asider/back-asider.component';
@Component({
  selector: 'app-back',
  imports: [RouterOutlet, BackToolbarComponent, BackAsiderComponent],
  templateUrl: './back.component.html',
  styleUrl: './back.component.css'
})
export class BackComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
