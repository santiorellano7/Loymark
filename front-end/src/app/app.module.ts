import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './services/usuario/usuario.service';
import { ActividadService } from './services/actividad/actividad.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { FormsModule } from '@angular/forms';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActividadComponent,
    UsuarioListComponent,
    UsuarioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [
    ActividadService,
    UsuarioService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
