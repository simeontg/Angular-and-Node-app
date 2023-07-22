import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    LabelModule,
    InputsModule,
    ButtonsModule
  ]
})
export class SharedModule { }
