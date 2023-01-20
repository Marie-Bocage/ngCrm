import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-redirection',
  templateUrl: './button-redirection.component.html',
  styleUrls: ['./button-redirection.component.scss']
})
export class ButtonRedirectionComponent {
  @Input() public redirection!: string;
  @Input() public nomLabel!: string;

  constructor() {
    // this.redirection = "Retour";
  }

}
