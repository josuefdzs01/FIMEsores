import { MaestrosComponent } from './maestros.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@NgModule({
  declarations: [
    MaestrosComponent
  ],
  imports: [
    CommonModule,
    DateInputsModule,
    BrowserAnimationsModule,
    GridModule,
    DropDownsModule,
  ]
})
export class MaestrosModule { }
