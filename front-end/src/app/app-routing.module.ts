import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';

const routes: Routes = [
  {path: '', component: UsuarioListComponent},
  {path: 'usuarioList', component: UsuarioListComponent},
  {path: 'usuarioList/:id', component: UsuarioFormComponent},
  {path: 'actividad', component: ActividadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
