import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeSection = 'recipe';

  onSectionSelected(section: string) {
    this.activeSection = section;
  }
}
