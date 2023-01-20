import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { TableLightComponent } from './components/table-light/table-light.component';
import { ButtonRedirectionComponent } from './components/button-redirection/button-redirection.component';
import { TotalPipe } from './pipes/total.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TableLightComponent,
    ButtonRedirectionComponent,
    TotalPipe
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [TemplatesModule, IconsModule, TableLightComponent, ButtonRedirectionComponent, TotalPipe]
})
export class SharedModule { }
