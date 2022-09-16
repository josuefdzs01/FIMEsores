import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MateriasComponent } from './materias/materias.component';
import { MaestrosComponent } from './maestros/maestros.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'nosotros',
        component: NosotrosComponent
      },
      {
        path: 'maestros',
        component: MaestrosComponent
      },
      {
        path: 'materias',
        component: MateriasComponent
      },
      {
        path: 'perfil',
        component: PerfilComponent
      },
      {path: '', redirectTo: '/inicio', pathMatch: 'full'},
      {path: '**', redirectTo: '/inicio', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
