import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-close.component.html',
  styleUrls: ['./icon-close.component.scss']
})
export class IconCloseComponent {
  public myIcon: IconDefinition;

  constructor() {
    this.myIcon = faXmark;
  }
}
