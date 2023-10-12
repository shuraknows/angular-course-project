import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styles: [``]
})
export class HeaderComponent {
  @Output() sectionSelected = new EventEmitter<string>();
  collapsed = true;

  onSelect(section: string) {
    this.sectionSelected.emit(section);
  }
}
