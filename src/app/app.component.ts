import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  standalone: true,
  imports: [RouterOutlet, MenuTitleComponent]
})
export class AppComponent {
  title = 'app-blog';
}

