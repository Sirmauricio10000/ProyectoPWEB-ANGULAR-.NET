import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './proyecto/Estudiante/nav-estudiante/nav-menu.component';
import { HomeComponent } from './proyecto/Estudiante/home-estudiante/home.component';
import { RegistroProyectoComponent } from './proyecto/Estudiante/registro-proyecto-estudiante/registro-proyecto.component';
import { ConsultaProyectoComponent } from './proyecto/Funcionario/consulta-proyecto-funcionario/consulta-proyecto.component';
import { PeticionesComponent } from './proyecto/Estudiante/realizar-peticiones/peticiones.component';
import { FooterComponent } from './proyecto/footer/footer.component';
import { GestionProyectoComponent } from './proyecto/Funcionario/gestion-proyecto/gestion-proyecto.component';
import { LoginComponent } from './proyecto/login/login.component';
import { RegistroUsuarioComponent } from './proyecto/registro-usuario/registro-usuario.component';
import { ConsultaPeticionesComponent } from './proyecto/Estudiante/consulta-peticiones/consulta-peticiones.component';
import { ConsultarPerfilComponent } from './proyecto/Estudiante/consultar-perfil/consultar-perfil.component';
import { ModificarPerfilComponent } from './proyecto/Estudiante/modificar-perfil/modificar-perfil.component';
import { ModificarProyectoComponent } from './proyecto/Estudiante/modificar-proyecto/modificar-proyecto.component';
import { CancelarInscripcionComponent } from './proyecto/Estudiante/cancelar-inscripcion/cancelar-inscripcion.component';
import { ConsultarProyectoEstudianteComponent } from './proyecto/Estudiante/consultar-proyecto-estudiante/consultar-proyecto-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    RegistroProyectoComponent,
    ConsultaProyectoComponent,
    PeticionesComponent,
    FooterComponent,
    GestionProyectoComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    ConsultaPeticionesComponent,
    ConsultarPerfilComponent,
    ModificarPerfilComponent,
    ModificarProyectoComponent,
    CancelarInscripcionComponent,
    ConsultarProyectoEstudianteComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'app-home', component: HomeComponent},
      { path: 'app-registro-proyecto', component: RegistroProyectoComponent},
      { path: 'app-consulta-proyecto', component: ConsultaProyectoComponent},
      { path: 'app-peticiones', component: PeticionesComponent},
      { path: 'app-gestion-proyecto', component: GestionProyectoComponent},
      { path: 'app-registro-usuario', component: RegistroUsuarioComponent},
      { path: 'app-consulta-peticiones', component: ConsultaPeticionesComponent},
      { path: 'app-consultar-perfil', component: ConsultarPerfilComponent},
      { path: 'app-modificar-perfil', component: ModificarPerfilComponent},
      { path: 'app-cancelar-inscripcion', component: CancelarInscripcionComponent},
      { path: 'app-modificar-proyecto', component: ModificarProyectoComponent},
      { path: 'app-consultar-proyecto-estudiante', component: ConsultarProyectoEstudianteComponent},
      { path: '', component: LoginComponent, pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
