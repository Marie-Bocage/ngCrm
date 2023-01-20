import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './components/ui/ui.component';
import { CoreModule } from '../core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    UiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
