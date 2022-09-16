import { MateriasModule } from './materias/materias.module';
import { MaestrosModule } from './maestros/maestros.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaestrosModule,
    MateriasModule
  ]
})
export class HomeModule { }
