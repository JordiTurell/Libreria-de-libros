import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-front',
  imports: [ToolbarComponent, RouterOutlet],
  templateUrl: './front.component.html',
  styleUrl: './front.component.css'
})
export class FrontComponent {

}
